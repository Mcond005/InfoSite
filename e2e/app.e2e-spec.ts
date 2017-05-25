import { MariaMiguelProfilesAppPage } from './app.po';

describe('maria-miguel-profiles-app App', () => {
  let page: MariaMiguelProfilesAppPage;

  beforeEach(() => {
    page = new MariaMiguelProfilesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
