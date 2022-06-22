import config from "../config";
export async function GetMeds(locationID, token) {
  return await config.post(
    "meds",
    { location_id: locationID },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
}

export async function saveMeds(formData, token) {
  return await config.post("savemeds", formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
