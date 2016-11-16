import { TourOfHeroesPage } from './app.po';

describe('tour-of-heroes App', function() {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display message saying Tour of Heroes', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tour of Heroes');
  });
});
