import { fetchApi } from '../utils/apiCaller';
import FETCH_USERS_SUCCESS from '../constants/actions/UserConstants';
import makeActionCreator from '../utils/makeActionCreator';

export const fetchUsersSuccess = makeActionCreator(
  FETCH_USERS_SUCCESS,
  `users`,
);

export const actGetUser = () => {
  return async (dispatch) => {
    return fetchApi('https://jsonplaceholder.typicode.com/users', 'GET').then(
      (response) => {
        dispatch(fetchUsersSuccess(response.data));
        return true;
      },
      (error) => {
        throw error;
      },
    );
  };
};

export const actDelLanguage = () => {
  return Promise.all([
    fetchApi('https://pktai.herokuapp.com/api/languages/1232', 'DELETE'),
    fetchApi('https://pktai.herokuapp.com/api/languages/1233', 'DELETE'),
    fetchApi('https://pktai.herokuapp.com/api/languages/1234', 'DELETE'),
    fetchApi('https://pktai.herokuapp.com/api/languages/1235', 'DELETE'),
  ])
    .then((res) => true)
    .catch((err) => {
      console.log(err);
    });
};

export const actGetLanguage = () => {
  return fetchApi('https://pktai.herokuapp.com/api/languages', 'GET').then(
    (response) => {
      console.log('get', response);
      return true;
    },
    (error) => {
      throw error;
    },
  );
};
