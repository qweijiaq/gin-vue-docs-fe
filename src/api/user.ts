import { useAxios, type Response } from ".";

export interface LoginRequest {
  userName: string;
  password: string;
}

// 登录成功后直接返回 token
export function loginApi(data: LoginRequest): Promise<Response<string>> {
  return useAxios.post("/api/login", data);
}

export function logoutApi(): Promise<Response<string>> {
  return useAxios.get("/api/logout");
}
