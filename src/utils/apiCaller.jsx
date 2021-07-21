import axios from 'axios';
import { Modal } from 'antd';
import * as urlAPI from '../constants/urlAPI';
import { LOGIN_URL, TOKEN_KEY } from '../constants';
import history from './history';

const instanceNext = axios.create({
  baseURL: urlAPI.API_URL,
});

/**
 * @author: exe
 * @description: config header Authorization each send request
 */
instanceNext.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const token = localStorage.getItem(TOKEN_KEY);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    throw error;
  },
);

/**
 * @author: exe
 * @description: handle response interceptor
 */
let isShowModalExpried = false;
instanceNext.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // token expiry
    if (
      error.response &&
      error.response.status === 401 &&
      !isShowModalExpried
    ) {
      isShowModalExpried = true;
      Modal.warning({
        title: 'Token expiry time',
        content: 'Please login again',
        onOk: () => {
          // redirect to login page
          history.push(LOGIN_URL);

          // clear token
          // clearAuthStorage();

          // dispatch action LOGOUT
          // store.dispatch({ type: auth.LOGOUT });
        },
      });
    }

    // call api without token
    if (error.response && error.response.status === 403) {
      window.location.href =
        process.env.REACT_APP_REDIRECT_AUTH_URL || LOGIN_URL;
    }

    if (error.response) {
      return Promise.reject(error.response);
    }
    if (error.request) {
      return Promise.reject(error.request);
    }
    return Promise.reject(error.message);
  },
);

/**
 * @param {string} url
 * @param {string} method
 * @param {any} body
 * @param {Object} params
 * @param {any} cancelRequestToken
 */

export async function fetchApi(
  endpoint,
  method = 'GET',
  body,
  params = {},
  sourceToken = null,
) {
  return instanceNext({
    method,
    url: endpoint,
    data: body,
    params,
    cancelToken: sourceToken,
  });
}

export async function fetchAllApi(requests = []) {
  return axios.all(requests);
}
