import moment from 'moment';

export const commentTemplate = ({ comment, dateComment }) => `
  <div>
    <p class="comment-text">${comment}</p>
    <p class="comment-date"><span>${moment(dateComment).startOf('day').fromNow()}</span></p>
  </div>
`;

export const commetsRender = (commentList) => ({ comment }) => {
  const commentsHTML = comment.map(commentTemplate).join('');
  commentList.innerHTML = commentsHTML;
};

export const commentButton = () => '<button class="button" type="submit">comment</button>';
