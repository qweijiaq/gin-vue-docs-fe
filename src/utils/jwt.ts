import type { userInfoType } from "@/stores";

export function parseToken(token: string): userInfoType {
  let payload = token.split(".")[1];
  return JSON.parse(
    decodeURIComponent(
      escape(window.atob(payload.replace(/-/g, "+").replace(/_/g, "/")))
    )
  );
}
