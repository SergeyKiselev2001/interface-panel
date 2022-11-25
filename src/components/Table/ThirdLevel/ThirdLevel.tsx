import { useDispatch } from "react-redux";
import { treeItemDto } from "../../../api/axios.types";
import { deleteSelectedRow } from "../../../redux/store";

type Props = {
  items: treeItemDto;
};

const ThirdLevel = ({ items }: Props) => {
  const dispatch = useDispatch()  

  const deleteRow = () => {
    dispatch(deleteSelectedRow(items.id) as any)
  } 

  return (
    <tr>
      <td>
        <div className="options">
          <i className="third-lvl-icon" />
          <i className="trash-icon hide-icon" onClick={deleteRow} />
        </div>
      </td>
      <td>{items.rowName}</td>
      <td>{items.salary}</td>
      <td>{items.equipmentCosts}</td>
      <td>{items.overheads}</td>
      <td>{items.estimatedProfit}</td>
    </tr>
  );
};

export { ThirdLevel };
