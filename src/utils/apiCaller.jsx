import axios from 'axios';

const instanceAPI = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetch = async (endpoint, method = 'GET', params = {}, body) => {
  try {
    return instanceAPI({
      method,
      url: endpoint,
      data: body,
      params,
    });
  } catch (err) {
    return err;
  }
};

export default fetch;
