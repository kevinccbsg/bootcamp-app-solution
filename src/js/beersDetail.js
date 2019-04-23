
const beerTemplate = ({ beerId, image, name, description, contributedBy, firstBrewed }) => `
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
    </div>
  </div>
`;

export const beersDetailTemplate = id => ({ beer }) => {
  const template = beerTemplate(beer);
  document.getElementById(id).innerHTML = `
    <div class="main-layout-beers">
      ${template}
    </div>`;
};
