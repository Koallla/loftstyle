import axios from 'axios';

const URL = 'http://localhost:3001/image';

const API = () => {
  return axios.get(URL);
};

export default API;
