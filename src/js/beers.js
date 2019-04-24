import { addLike } from '../api';

export const beerTemplate = ({ beerId, image, name, description, contributedBy, firstBrewed, likes }) => `
  <div id=${beerId} class="card">
    <a href="detail.html?id=${beerId}">
      <div class="card-image-container">
        <picture>
          <img class="card-image" src=${image} alt=${name} />
        </picture>
      </div>
      <div class="card-content">
        <div>
          <h2>${name}</h2>
        </div>
        <p>${description}</p>
      </div>
    </a>
    <div class="card-footer">
      <div>
        <div>${contributedBy}</div>
        <div>${firstBrewed}</div>
      </div>
      ${buttonTemplate(likes)}
    </div>
  </div>
`;

export const buttonTemplate = (likes) => `
  <button>
    <i class="fas fa-heart"></i>
    ${likes}
  </button>
`;

export const beersTemplate = (id, year = '') => ({ beers }) => {
  const template = beers
    .filter(({ firstBrewed }) => {
      if (!year) return true;
      return firstBrewed.split('/')[1] === year;
    })
    .map(beerTemplate);
  document.getElementById(id).innerHTML = `
    <div class="main-layout-beers">
      ${template.length ? template.join('') : '<p>No beers for that filter</p>'}
    </div>`;
  const buttons = document.querySelectorAll('.card button');
  buttons.forEach((button) => {
    const id = button.parentNode.parentNode.getAttribute('id');
    button.addEventListener('click', () => {
      const likes = Number(button.textContent.trim()) + 1;
      button.innerHTML = buttonTemplate(likes);
      addLike(id);
    });
  });
};
