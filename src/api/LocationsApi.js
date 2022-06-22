import config from "../config";

export async function GetLocations() {
  return await config.get("locations");
}

export async function SaveLocation(formData, token) {
  return await config.post("locationsave", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
