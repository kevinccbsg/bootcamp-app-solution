import { addLike } from '../api';

const beerTemplate = ({ beerId, image, name, description, contributedBy, firstBrewed, likes }) => `
  <div id=${beerId} class="card">
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
    <div class="card-footer">
      <div>
        <div>${contributedBy}</div>
        <div>${firstBrewed}</div>
      </div>
      ${buttonTemplate(likes)}
    </div>
  </div>
`;

const buttonTemplate = (likes) => `
  <button>
    <i class="fas fa-heart"></i>
    ${likes}
  </button>
`;

export const beersDetailTemplate = id => ({ beer }) => {
  const template = beerTemplate(beer);
  document.getElementById(id).innerHTML = `
    <div class="main-layout-beers">
      ${template}
    </div>`;
  const buttons = document.querySelectorAll('.card button');
  buttons.forEach((button) => {
    const id = button.parentNode.parentNode.getAttribute('id');
    button.addEventListener('click', (evt) => {
      const likes = Number(button.textContent.trim()) + 1;
      button.innerHTML = buttonTemplate(likes);
      addLike(id);
    });
  });
};
