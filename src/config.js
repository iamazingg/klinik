import axios from 'axios';
const config = axios.create({
  baseURL: 'https://nyomandarmawan.id/api/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});

export default config;
