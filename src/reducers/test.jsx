import test from '../constants';

const getTest = (state = [], action) => {
  const { data } = action;

  switch (action.type) {
    case test.TEST:
      return data;
    default:
      return state;
  }
};

export default getTest;