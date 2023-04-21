import { API_HOST, ENCRYPT_KEY } from '../constant';
import {requestEncryption} from '../redux/actions/RegisterActions';
import { fetch } from './Fetch';

const login = (user) => {
  //  return fetch('post', `${API_HOST}users/user/login`, user);
  let data = requestEncryption(user);
  return fetch('post', `${API_HOST}users/user/login`, {data:data});
};
 
const verifyUsersEmail = (token) => {
    return fetch('post', `${API_HOST}users/user/verify-email`, token);
  };

const getApi = () => {
  return fetch('get', `https://jsonplaceholder.typicode.com/users`);
};

const getIp = () => {
  return fetch('get', 'https://ipapi.co/json/');
};


export const UserService = {
  login,
  getIp,
  getApi
};
