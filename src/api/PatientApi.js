import config from '../config';
export async function getPatient(token) {
  return await config.get('patients', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
