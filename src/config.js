import axios from 'axios';
const config = axios.create({
  baseURL: 'https://klinik.nyomandarmawan.id/api/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});

export default config;
