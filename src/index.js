import './styles/index.scss';
import './images/pilsen-beer/pilsen-beer_lb8drl_c_scale,w_200.jpg';
import './images/pilsen-beer/pilsen-beer_lb8drl_c_scale,w_681.jpg';
import './images/pilsen-beer/pilsen-beer_lb8drl_c_scale,w_1007.jpg';
import './images/pilsen-beer/pilsen-beer_lb8drl_c_scale,w_1250.jpg';
import './images/pilsen-beer/pilsen-beer_lb8drl_c_scale,w_1400.jpg';
import authRoute from './js/authRoute';
import { beersTemplate } from './js/beers';
import { loading } from './js/ui';
import { getBeers } from './api';

authRoute('/login.html')
  .then(() => getBeers())
  .then(beersTemplate('root'));

const form = document.getElementById('filter-form');
const filter = document.getElementById('filter');
const beersContainer = document.getElementById('root');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  beersContainer.innerHTML = loading();
  getBeers(filter.value)
    .then(beersTemplate('root'));
});
