import type argon2 from "argon2-browser";

declare module "argon2-webworker" {
  export const ArgonType: typeof argon2.ArgonType;
  export const hash: typeof argon2.hash;
}
