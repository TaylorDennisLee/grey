import { GreyPage } from './app.po';

describe('grey App', function() {
  let page: GreyPage;

  beforeEach(() => {
    page = new GreyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
