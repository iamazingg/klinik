import config from "../config";
export async function GetMedsCategories(token) {
  return await config.get("medCategories", {
    headers: { Authorization: `Bearer ${token}` },
  });
}
export async function SaveMedsCategories(formData, token) {
  return await config.post("medCategoriessave", formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
