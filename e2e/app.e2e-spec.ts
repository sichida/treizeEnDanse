import { TreizeEnDansePage } from './app.po';

describe('treize-en-danse App', function() {
  let page: TreizeEnDansePage;

  beforeEach(() => {
    page = new TreizeEnDansePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
