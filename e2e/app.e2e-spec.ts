import { TestingPlaygroundPage } from './app.po';

describe('testing-playground App', () => {
  let page: TestingPlaygroundPage;

  beforeEach(() => {
    page = new TestingPlaygroundPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
