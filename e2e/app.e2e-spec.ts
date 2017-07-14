import { RestuarantPage } from './app.po';

describe('restuarant App', () => {
  let page: RestuarantPage;

  beforeEach(() => {
    page = new RestuarantPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
