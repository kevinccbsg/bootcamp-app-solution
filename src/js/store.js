import Cookies from 'js-cookie';

const store = () => {
  const api = {
    get: (key) => Cookies.get(key),
    set: (key, value) => Cookies.set(key, value),
    remove: (key) => Cookies.remove(key),
  };
  return api;
};

export default store;
