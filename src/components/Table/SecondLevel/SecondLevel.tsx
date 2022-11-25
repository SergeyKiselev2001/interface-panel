import { useDispatch } from "react-redux";
import { treeItemDto } from "../../../api/axios.types";
import { deleteSelectedRow } from "../../../redux/store";
import { ThirdLevel } from "../ThirdLevel/ThirdLevel";

type Props = {
  items: treeItemDto;
};

const SecondLevel = ({ items }: Props) => {

  const dispatch = useDispatch()  

  const deleteRow = () => {
    dispatch(deleteSelectedRow(items.id) as any)
  } 

  return (
    <>
      <tr>
        <td>
          <div className="options">
            <i className="second-lvl-icon" />
            <i className="third-lvl-icon hide-icon" />
            <i className="trash-icon hide-icon" onClick={deleteRow} />
          </div>
        </td>
        <td>{items.rowName}</td>
        <td>{items.salary}</td>
        <td>{items.equipmentCosts}</td>
        <td>{items.overheads}</td>
        <td>{items.estimatedProfit}</td>
      </tr>
      { items.child?.map(el => <ThirdLevel key={el.id} items={el} />) }
    </>
  );
};

export { SecondLevel };
