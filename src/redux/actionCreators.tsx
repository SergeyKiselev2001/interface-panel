import { treeDto, treeItemDto } from "../api/axios.types";
import { ActionTypes } from "../constants/actionTypes";

export const setTableAc = (payload: treeDto) => ({
    type: ActionTypes.SET_TABLE,
    payload
})


export const updateTableAc = (payload: treeItemDto) => ({
    type: ActionTypes.UPDATE_TABLE,
    payload
})