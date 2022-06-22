import config from "../config";

export async function getServiceCategory(token) {
  return await config.get("servicecategory", {
    headers: { Authorization: `Bearer ${token}` },
  });
}
export async function SaveServiceCategory(FormData, token) {
  return await config.post(
    "servicecategorysave",
    FormData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}
