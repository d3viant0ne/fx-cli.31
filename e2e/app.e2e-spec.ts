import { FxFlexCli.31Page } from './app.po';

describe('fx-flex-cli.31 App', function() {
  let page: FxFlexCli.31Page;

  beforeEach(() => {
    page = new FxFlexCli.31Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
