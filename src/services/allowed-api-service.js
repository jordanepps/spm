import axios from 'axios';
import config from '../config';
import TokenService from './token-service';

const url = `${config.API_ENDPOINT}/allowed`;
const headers = {
  authorization: `bearer ${TokenService.getAuthToken()}`,
  'content-type': 'application/json'
};

const AllowedApiService = {
  //   getAll() {
  //     return fetch(`${config.API_ENDPOINT}/allowed`, {
  //       method: 'GET',
  //       headers: {
  //         authorization: `bearer ${TokenService.getAuthToken()}`,
  //         'content-type': 'application/json'
  //       }
  //     }).then(res => {
  //       if (!res.ok) throw Error(res);
  //       return res;
  //     });
  //   }

  getAll: async set => {
    const response = await axios.get(url, { headers });

    set(response.data);
  }
};

export default AllowedApiService;
