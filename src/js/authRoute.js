

export default (redirect) => {
  if (!get('token')) {
    return window.location.href = redirect;
  }
  return get('token');
};
