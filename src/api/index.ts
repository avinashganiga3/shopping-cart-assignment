import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/",
  timeout: 5000,
});

export const getData = async <T>(url: string): Promise<T> => {
  const response = await axiosInstance.get(url);
  return response.data;
};

export const postData = async <D, T>(url: string, data: D): Promise<T> => {
  //as api data are fetched directly from local fetch file post request get won't work
  const response = await axiosInstance.get(url, data);
  // const response = await axiosInstance.post(url, data);
  return response.data;
};
