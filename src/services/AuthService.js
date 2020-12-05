import ApiAxios from "../ApiAxios";

export const checkToken = async (token) => {
  const response = await ApiAxios.post("/auth/check-token", { token });
  return response.data;
};

export const postSignIn = async ({ email, password }) => {
  const response = await ApiAxios.post("/auth/signin", { email, password });
  return response.data;
};
