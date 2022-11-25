import { combineReducers, configureStore, createReducer, Dispatch } from '@reduxjs/toolkit'
import { createRow, deleteRow, getTree } from '../api/axios'
import { createRowDto, treeDto } from '../api/axios.types'
import { ActionTypes } from '../constants/actionTypes'
import { httpCodes } from '../constants/api'
import { setTableAc } from './actionCreators'

const initialState = {
  tableData: [] as treeDto
}

const tableReducer = createReducer(initialState, {
    [ActionTypes.SET_TABLE]: (state, action) => {
      return { ...state, tableData: action.payload }
    },
    [ActionTypes.UPDATE_TABLE]: (state, action) => {
      return { ...state, tableData: {
        ...state.tableData,

      } }
    }
  }
)

export const fetchTableData = () => async (dispatch: Dispatch) => {
  const response = await getTree()
  dispatch(setTableAc(response))
}

export const createNewRow = (rowDto?: createRowDto) => async (dispatch: Dispatch) => {
  const newRow = {
    parentId: null,
    rowName: 'row name',
    salary: 0,
    mimExploitation: 0,
    machineOperatorSalary: 0,
    materials: 0,
    mainCosts: 0,
    supportCosts: 0,
    equipmentCosts: 0,
    overheads: 0,
    estimatedProfit: 0,
    ...rowDto
  }

  const status = await createRow(newRow)
  if (status == httpCodes.OK){
    dispatch(fetchTableData() as any)
  }
}


export const deleteSelectedRow = (rowId: number) => async (dispatch: Dispatch) => {
  const status = await deleteRow(rowId)
  if (status == httpCodes.OK){
    dispatch(fetchTableData() as any)
  }
}


const rootReducer = combineReducers({tableReducer})

export const store = configureStore({reducer: rootReducer})

export type storeType = {
    tableReducer: any,
    getInitialState: any
}