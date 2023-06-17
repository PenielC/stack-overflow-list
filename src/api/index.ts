import axios from 'axios';
import BASE_URL from './baseUrl';

const fetcher = axios.create({
  baseURL: BASE_URL.API,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const GetUsersList = () => {
  return fetcher.get(`${BASE_URL.ENDPOINT.GetUsersList}?pagesize=20&order=desc&sort=reputation&site=stackoverflow`)
  .then((result: any) => {
    return result?.data?.items;
  });
};
