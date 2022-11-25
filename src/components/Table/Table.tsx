import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { treeDto } from "../../api/axios.types"
import { fetchTableData, storeType } from "../../redux/store"
import { FirstLevel } from "./FirstLevel/FirstLevel"
import "./Table.style.scss"
import { Thead } from "./Thead/Thead"

const Table = () => {
    const tableState = useSelector((state: storeType) => state.tableReducer?.tableData) as treeDto
    const dispatch = useDispatch()
    
    useEffect(() => {
      if (!tableState?.length){ dispatch(fetchTableData() as any)}
    }, [])

  return (
    <> 
      <table>
        <Thead />
        <tbody>
          { tableState?.map(el => <FirstLevel key={el.id} items={el} />) }
        </tbody>
      </table>
     </>
  )
}

export { Table }