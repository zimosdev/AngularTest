import { AngtestPage } from './app.po';

describe('angtest App', () => {
  let page: AngtestPage;

  beforeEach(() => {
    page = new AngtestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
