import { createApi, type Meta } from "$lib/createApi";

export const authMeta = {
  url: "google.com/api/auth",
  endpoints: [
    ["get", "user", ["email"]],
    ["post", "singIn", ["email", "password"]],
    ["post", "singUp", ["email", "name", "password"]]
  ] as Meta["endpoints"],
};


export const authApi = createApi(authMeta);
