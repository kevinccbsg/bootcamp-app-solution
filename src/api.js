import store from './js/store';

const { get } = store();

const API = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh';

export const login = async ({ email }) => {
  const response = await fetch(`${API}/api/v1/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  if (response.status >= 400) {
    const error = { message: 'Error on response', status: response.status };
    throw error;
  }
  if (!response.ok) {
    throw 'Error';
  }
  const data = await response.json();
  return data;
};

export const getBeers = async (search, limit = 10) => {
  let extraParams = search ? `search=${search}` : '';
  extraParams = limit ? `${extraParams}&limit=${limit}` : '';
  const reqURL = `${API}/api/v1/beers?${extraParams}`;
  const response = await fetch(reqURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': get('token'),
    },
  });
  if (response.status >= 400) {
    const error = { message: 'Error on response', status: response.status };
    throw error;
  }
  if (!response.ok) {
    throw 'Error';
  }
  const data = await response.json();
  return data;
};

export const addLike = async (id) => {
  const response = await axios(`${API}/api/v1/beers/${id}/like`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': get('token'),
    },
  });
  if (response.status >= 400) {
    const error = { message: 'Error on response', status: response.status };
    throw error;
  }
  if (!response.ok) {
    throw 'Error';
  }
  const data = await response.json();
  return data;
};
