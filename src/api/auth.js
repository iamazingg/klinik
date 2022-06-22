import config from "../config";

export const login = async (formData) => {
  return await config.post("login", formData);
};
