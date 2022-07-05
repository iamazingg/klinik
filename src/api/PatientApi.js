import config from '../config';
export async function getPatient(token) {
  return await config.get('patients', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export async function SavePatient(formData, token) {
  return await config.post("medCategoriessave", formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

