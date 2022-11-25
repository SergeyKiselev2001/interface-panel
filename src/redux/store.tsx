import { combineReducers, configureStore, createReducer, Dispatch } from '@reduxjs/toolkit'
import { getTree } from '../api/axios'
import { treeDto } from '../api/axios.types'
import { ActionTypes } from '../constants/actionTypes'
import { setTableAc } from './actionCreators'

const initialState = {
  tableData: [] as treeDto
}

const tableReducer = createReducer(initialState, {
    [ActionTypes.SET_TABLE]: (state, action) => {
      return { ...state, tableData: action.payload }
    }
  }
)

export const fetchTableData = () => async (dispatch: Dispatch) => {
  const response = await getTree()
  dispatch(setTableAc(response))
}

const rootReducer = combineReducers({tableReducer})

export const store = configureStore({reducer: rootReducer})

export type storeType = {
    tableReducer: any,
    getInitialState: any
}