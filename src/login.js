import './styles/login.scss';
import './images/emoji-beer-png-3.png';
import { login } from './api';
import { redirect } from './js/authRoute';
import store from './js/store';

const { set } = store();

const form = document.getElementById('login-form');
const formContainer = document.querySelector('.login-container');
const email = document.getElementById('email');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  formContainer.classList.add('loading');
  login({ email: email.value })
    .then(({ user }) => {
      formContainer.classList.remove('loading');
      set('token', user.apiKey);
      redirect('/');
    })
    .catch(() => {
      formContainer.classList.remove('loading');
      formContainer.classList.add('error');
    });
});
