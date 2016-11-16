import { RecipeFrontendPage } from './app.po';

describe('recipe-frontend App', function() {
  let page: RecipeFrontendPage;

  beforeEach(() => {
    page = new RecipeFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
