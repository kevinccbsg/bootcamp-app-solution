
export const commentTemplate = ({ comment, dateComment }) => `
  <div>
    <p class="comment-text">${comment}</p>
    <p class="comment-date"><span>${dateComment}</span></p>
  </div>
`;

export const commetsRender = (commentList) => ({ comment }) => {
  const commentsHTML = comment.map(commentTemplate).join('');
  commentList.innerHTML = commentsHTML;
};
