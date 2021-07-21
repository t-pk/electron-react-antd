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
        console.log(error);
      },
    );
  };
};
