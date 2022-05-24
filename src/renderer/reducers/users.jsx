import { fromJS } from 'immutable';
import createReducer from '../utils/createReducer';
import FETCH_USERS_SUCCESS from '../constants/actions/UserConstants';

const users = createReducer(null, {
  [FETCH_USERS_SUCCESS](state, action) {
    const { users: lsUser } = action;
//    state.toJS().concat(lsUser);
    // a = a.concat(lsUser);
    // const data = state.toJS();
    // data.push(lsUser);
    // return (state = fromJS(data));
    return (state = fromJS(lsUser));
  },
});

export default users;
