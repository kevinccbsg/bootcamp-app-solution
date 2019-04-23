import './styles/detail.scss';
import authRoute, { redirect } from './js/authRoute';
import { beersDetailTemplate } from './js/beersDetail';
import { commetsRender } from './js/comments';
import { getBeersDetail, createComment } from './api';

const [, id] = window.location.search ?
      window.location.search.split('=') : [];

const commentList = document.getElementById('comment-list');
const commentInput = document.getElementById('comment');
const commentForm = document.getElementById('comment-form');

authRoute('/login.html')
  .then(() => {
    const intId = Number(id);
    if (!id || isNaN(intId)) {
      return redirect('/login.html');
    }
    return getBeersDetail(id);
  })
  .then((response) => {
    beersDetailTemplate('root')(response);
    commetsRender(commentList)(response.beer);
  });

commentForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const inputValue = commentInput.value;
  createComment(id, inputValue)
    .then(() => getBeersDetail(id))
    .then(commetsRender(commentList));
});
