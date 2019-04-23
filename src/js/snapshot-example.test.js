const { beerTemplate, buttonTemplate } = require('./beers');

describe('Snapshot', () => {
  it('beerTemplate Snapshot', () => {
    const tree = beerTemplate({
      beerId: 2,
      image: 'image',
      name: 'name 1',
      description: 'description 1',
      contributedBy: 'kevin',
      firstBrewed: '2019-12',
      likes: 2,
    });
    expect(tree).toMatchSnapshot();
  });

  it('buttonTemplate Snapshot', () => {
    const tree = buttonTemplate(2);
    expect(tree).toMatchSnapshot();
  });
});