import config from "../config";

export async function getServices(token) {
  return await config.get("services", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export async function saveServices(formdata, token) {
  return await config.post("servicesave", formdata, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
