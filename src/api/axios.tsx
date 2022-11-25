import axios from "axios";
import { eID, httpCodes } from "../constants/api";
import { createRowDto } from "./axios.types";

const api = axios.create({
  baseURL: "http://185.244.172.108:8081",
});

export const createEntity = () => api.post("/v1/outlay-rows/entity/create");

export const getTree = async () => {
  const response = await api.get(`/v1/outlay-rows/entity/${eID.id}/row/list`);
  return response.data;
};



export const createRow = async (body: createRowDto) => {
  try {
    const res = await api.post(`/v1/outlay-rows/entity/${eID.id}/row/create`, body);
    return res.status
  } catch (e) {
    alert("request error");
  }
};

export const deleteRow = async (rID: number) => {
  try {
    const res = await api.delete(`/v1/outlay-rows/entity/${eID.id}/row/${rID}/delete`)
    return res.status
  } catch (e) {
    alert("request error");
  }
}
