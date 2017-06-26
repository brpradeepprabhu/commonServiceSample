import { CommonServicePage } from './app.po';

describe('common-service App', () => {
  let page: CommonServicePage;

  beforeEach(() => {
    page = new CommonServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
