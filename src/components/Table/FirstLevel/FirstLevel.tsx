import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { treeItemDto } from "../../../api/axios.types";
import { createNewRow, deleteSelectedRow } from "../../../redux/store";
import { SecondLevel } from "../SecondLevel/SecondLevel";

type Props = {
  items: treeItemDto;
};

type FieldTypes = 'name' | 'salary' | 'equipmentCosts' | 'overheads' | 'estimatedProfit'

const FirstLevel = ({ items }: Props) => {
  const [edit, setEdit] = useState(false);

  const [name, setName] = useState(items.rowName)
  const [salary, setSalary] = useState(items.salary)
  const [equipmentCosts, setEquipmentCosts] = useState(items.equipmentCosts)
  const [overheads, setOverheads] = useState(items.overheads)
  const [estimatedProfit, setEstimatedProfit] = useState(items.estimatedProfit)

  const changeValueHandle = ({ target: { value } }: ChangeEvent<HTMLInputElement>, fieldName: FieldTypes) => {
    
    const actions = {
        name: () => setName(value),
        salary: () => setSalary(Number(value)),
        equipmentCosts: () => setEquipmentCosts(Number(value)),
        overheads: () => setOverheads(Number(value)),
        estimatedProfit: () => setEstimatedProfit(Number(value))
    } as {[key: string]: () => any}

    actions[fieldName]()
  }

  const dispatch = useDispatch();
  const addFirstLevelRow = () => {
    dispatch(createNewRow() as any);
  };

  const deleteRow = () => {
    dispatch(deleteSelectedRow(items.id) as any);
  };

  const setEditHandle = () => setEdit(true);

  const trRef = useRef<HTMLTableRowElement | null>(null)

  const keyupHandle = (e: any) => {
    if (e.keyCode == 13){
        console.log('enter')
    }
  }

  useEffect(() => {
    trRef?.current?.addEventListener("keyup", keyupHandle)

    return () => {
        trRef?.current?.removeEventListener("keyup", keyupHandle)
    }
  }, [])

  return (
    <>
      <tr onDoubleClick={setEditHandle} ref={trRef}>
        <td>
        <div className={`${edit ? 'options-hide' : 'options'}`}>
            <i className="first-lvl-icon" onClick={addFirstLevelRow} />
            <i className="second-lvl-icon hide-icon" />
            <i className="third-lvl-icon hide-icon" />
            <i className="trash-icon hide-icon" onClick={deleteRow} />
        </div>
        </td>
        {edit ? (
          <>
            <td><input type="text" value={name} onChange={(e)=>changeValueHandle(e, 'name')} /></td>
            <td><input type="number" value={salary} onChange={(e)=>changeValueHandle(e, 'salary')} /></td>
            <td><input type="number" value={equipmentCosts} onChange={(e)=>changeValueHandle(e, 'equipmentCosts')} /></td>
            <td><input type="number" value={overheads} onChange={(e)=>changeValueHandle(e, 'overheads')} /></td>
            <td><input type="number" value={estimatedProfit} onChange={(e)=>changeValueHandle(e, 'estimatedProfit')} /></td>
          </>
        ) : (
          <>
            <td>{items.rowName}</td>
            <td>{items.salary}</td>
            <td>{items.equipmentCosts}</td>
            <td>{items.overheads}</td>
            <td>{items.estimatedProfit}</td>
          </>
        )}
      </tr>
      {items.child?.map((el) => (
        <SecondLevel key={el.id} items={el} />
      ))}
    </>
  );
};

export { FirstLevel };
