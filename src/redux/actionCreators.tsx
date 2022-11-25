import { treeDto } from "../api/axios.types";
import { ActionTypes } from "../constants/actionTypes";

export const setTableAc = (payload: treeDto) => ({
    type: ActionTypes.SET_TABLE,
    payload
})