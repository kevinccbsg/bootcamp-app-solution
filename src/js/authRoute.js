import store from './store';

const { get } = store();

export default (redirect) => {
  if (!get('token')) {
    return window.location.href = redirect;
  }
  return Promise.resolve(get('token'));
};

export const redirect = path => {
  window.location.href = path;
};
