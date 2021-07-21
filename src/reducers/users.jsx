import { fromJS } from 'immutable';
import createReducer from '../utils/createReducer';
import FETCH_USERS_SUCCESS from '../constants/actions/UserConstants';

const users = createReducer(null, {
  [FETCH_USERS_SUCCESS](state, action) {
    const { users } = action;
    return state.push(...fromJS(users));
  },
});

export default users;
