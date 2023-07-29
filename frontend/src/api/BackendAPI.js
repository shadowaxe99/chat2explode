// Connect UI to backend APIs

import axios from 'axios';

const BackendAPI = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export default BackendAPI;