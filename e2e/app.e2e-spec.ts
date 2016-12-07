import { TeamAppliFront1Page } from './app.po';

describe('team-appli-front1 App', function() {
  let page: TeamAppliFront1Page;

  beforeEach(() => {
    page = new TeamAppliFront1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
