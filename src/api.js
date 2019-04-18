import axios from 'axios';
import store from './js/store';

const { get } = store();

const API = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh';

export const login = async ({ email }) => {
  const { data, status } = await axios(`${API}/api/v1/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { email },
  });
  if (status >= 400) {
    const error = { message: 'Error on response', status: status };
    throw error;
  }
  return data;
};

export const getBeers = async (search, limit = 10) => {
  let extraParams = search ? `search=${search}` : '';
  extraParams = limit ? `${extraParams}&limit=${limit}` : '';
  const reqURL = `${API}/api/v1/beers?${extraParams}`;
  const { data, status } = await axios(reqURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': get('token'),
    },
  });
  if (status >= 400) {
    const error = { message: 'Error on response', status: status };
    throw error;
  }
  return data;
};

export const addLike = async (id) => {
  const { data, status } = await axios(`${API}/api/v1/beers/${id}/like`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': get('token'),
    },
  });
  if (status >= 400) {
    const error = { message: 'Error on response', status: status };
    throw error;
  }
  return data;
};
