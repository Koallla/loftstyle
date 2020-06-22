import axios from 'axios';

const URL = 'http://localhost:3001/image?page=1&itemsPerPage=6';

const API = () => {
  return axios.get(URL);
};

export default API;
