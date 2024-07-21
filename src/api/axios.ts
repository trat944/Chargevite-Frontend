import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // URL del backend later in env
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;


