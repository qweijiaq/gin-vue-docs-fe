import { useAxios } from ".";

export function loginApi(data: any) {
  return useAxios.post("/api/login", data);
}
