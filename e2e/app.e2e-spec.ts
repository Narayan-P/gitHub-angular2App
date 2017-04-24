import { GitHubAppPage } from './app.po';

describe('new-app App', () => {
  let page: GitHubAppPage;

  beforeEach(() => {
    page = new GitHubAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
