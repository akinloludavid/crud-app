// import { fakeBuyerDetails } from "../../utils/data";
import axios from "axios";
import { userKey } from "../../utils/data";
import { getAccessToken } from "../../utils/helpers";
import { ICreateBuyerPayload } from "../../utils/types";
import axiosInstance from "../axiosInstance";
import { baseUrl } from "../config";

export const getAllContracts = async (
  contractCode: string,
  pageNo: number,
  pageSize: string | number
) => {
  const res = await axiosInstance.get(
    `/buyers/?all=yes${contractCode}&page=${pageNo}&take=${pageSize}`
  );

  return res.data;
};

export const getContractById = async (id: string) => {
  const res = await axiosInstance(`/buyers/any/${id}`);
  return res.data;
};

export const createContract = async (body: ICreateBuyerPayload) => {
  const res = await axiosInstance.post("/buyers", body);
  return res.data;
};

export const updateContract = async (body: ICreateBuyerPayload) => {
  const res = await axiosInstance.put(`/buyers/${body.id}`, body);
  return res.data;
};

export const deleteBuyerDetails = async (id: string) => {
  const res = await axiosInstance.delete(`/buyers/${id}`);
  return res.data;
};

export const uploadFile = async ({ fd, buyerId }: any) => {
  const { accessToken } = getAccessToken(userKey);
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json, text/plain, */*",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const res = await axios.post(`${baseUrl}/files/${buyerId}`, fd, config);
  return res.data;
};
export const getFiles = async (buyerId: string | number) => {
  const res = await axiosInstance.get(
    `/files/?buyerId=${buyerId}&page=1&take=10`
  );
  return res.data;
};
