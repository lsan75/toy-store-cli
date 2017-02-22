import { ToyStorePage } from './app.po';

describe('toy-store App', () => {
  let page: ToyStorePage;

  beforeEach(() => {
    page = new ToyStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
