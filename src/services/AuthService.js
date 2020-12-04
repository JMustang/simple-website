import ApiAxios from "../ApiAxios";

export const checkToken = async (token) => {
  const response = await ApiAxios.post("/auth/check-token", { token });
  return response.data;
};
