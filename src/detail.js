import './styles/detail.scss';
import authRoute, { redirect } from './js/authRoute';
import { beersDetailTemplate } from './js/beersDetail';
import { getBeersDetail } from './api';

const [, id] = window.location.search ?
      window.location.search.split('=') : [];

authRoute('/login.html')
  .then(() => {
    const intId = Number(id);
    if (!id || isNaN(intId)) {
      return redirect('/login.html');
    }
    return getBeersDetail(id);
  })
  .then(beersDetailTemplate('root'));
