import axios from 'axios';
import config from '../config';
import TokenService from './token-service';

const url = `${config.API_ENDPOINT}/allowed`;
const headers = {
  authorization: `bearer ${TokenService.getAuthToken()}`,
  'content-type': 'application/json'
};

const AllowedApiService = {
  getAll: async set => {
    const response = await axios.get(url, { headers });
    set(response.data);
  },
  addEmail: async email => {
    try {
      const response = await axios.post(url, email, { headers });
      return response.data;
    } catch (err) {
      return err.response.data.error;
    }
  }
};

export default AllowedApiService;
