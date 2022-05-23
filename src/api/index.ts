import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 5000,
});

export const getData = async <T>(url: string): Promise<T> => {
  const response = await axiosInstance.get(url);
  return response.data;
};

export const postData = async <D, T>(url: string, data: D): Promise<T> => {
  const response = await axiosInstance.post(url, data);
  return response.data;
};
