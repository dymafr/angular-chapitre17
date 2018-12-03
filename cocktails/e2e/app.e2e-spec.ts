import { CocktailsPage } from './app.po';

describe('cocktails App', () => {
  let page: CocktailsPage;

  beforeEach(() => {
    page = new CocktailsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
