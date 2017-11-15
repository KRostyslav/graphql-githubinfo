import { TestGraphQlPage } from './app.po';

describe('test-graph-ql App', () => {
  let page: TestGraphQlPage;

  beforeEach(() => {
    page = new TestGraphQlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
