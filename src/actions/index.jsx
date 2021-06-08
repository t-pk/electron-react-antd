import fetch from '../utils/apiCaller';
import test from '../constants';

export const saveFilters = (data) => {
  return {
    type: test.TEST,
    data,
  };
};

export const actionTest = (data) => {
  return (dispatch) => {
    dispatch(saveFilters(data));
  };
};

export const actionClick = () => {
  return fetch('http://www.mocky.io/v2/5e47d74c300000e5392949ec').then(
    (res) => {
      return res;
    },
  );
};
