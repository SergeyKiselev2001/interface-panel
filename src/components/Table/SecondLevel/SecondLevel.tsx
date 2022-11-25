import { treeItemDto } from "../../../api/axios.types";

type Props = {
    items: treeItemDto
}

const SecondLevel = ({ items }: Props) => {


  return (
    <>
      <tr>
        <td className="level-2" />
        <td>{items.rowName}</td>
        <td>{items.salary}</td>
        <td>{items.equipmentCosts}</td>
        <td>{items.overheads}</td>
        <td>{items.estimatedProfit}</td>
      </tr>
    </>
  );
};

export { SecondLevel };
