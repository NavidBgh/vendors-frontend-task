import { request } from "../api";

export const getVendorsAPI = async () => {
  const { data } = await request.get(`/restaurant/vendors-list?lat=35.754&long=51.328`);
  return data;
};