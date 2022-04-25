import { request } from "../api";

export const getVendorsAPI = async (query: string = '', page: number = 1) => {
  const { data } = await request.get(`/restaurant/vendors-list?lat=35.754&long=51.328&page_size=10&page=${page}&${query}`);
  return data;
};