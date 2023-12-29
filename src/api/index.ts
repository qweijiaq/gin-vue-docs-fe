import { Message } from "@arco-design/web-vue";
import axios from "axios";

export const useAxios = axios.create({});

export interface Params {
  key?: string;
  sort?: string;
  limit?: number;
  page?: number;
}

export interface Response<T> {
  code: number;
  data: T;
  msg: string;
}

export interface ListResponse<T> {
  code: number;
  data: {
    count: number;
    list: T[];
  };
  msg: string;
}

export interface OptionsResponse {
  label: string;
  value: number;
}

useAxios.interceptors.request.use((config) => {
  config.headers["token"] = "xxxx";
  return config;
});

useAxios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }
    console.log("接口错误", response.statusText);
    Message.error(response.statusText);
    return Promise.reject(response.statusText);
  },
  (error) => {
    Message.error(error.message);
    console.log("服务错误", error);
    return Promise.reject(error);
  }
);
