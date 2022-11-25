import { treeItemDto } from "../../../api/axios.types"
import { SecondLevel } from "../SecondLevel/SecondLevel"

type Props = {
    items: treeItemDto
}

const FirstLevel = ({ items }: Props) => {

    return (
        <>
        <tr>
            <td className="level-1" />
            <td>{ items.rowName }</td>
            <td>{ items.salary }</td>
            <td>{ items.equipmentCosts }</td>
            <td>{ items.overheads }</td>
            <td>{ items.estimatedProfit }</td>
        </tr>
        { items.child?.map(el => <SecondLevel key={el.id} items={el} />) }
        </>

    )
}

export { FirstLevel }