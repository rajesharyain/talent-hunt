import { NestdecorPage } from './app.po';

describe('nestdecor App', () => {
  let page: NestdecorPage;

  beforeEach(() => {
    page = new NestdecorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
