import { PageDetailModule } from './page-detail.module';

describe('PageDetailModule', () => {
  let pageDetailModule: PageDetailModule;

  beforeEach(() => {
    pageDetailModule = new PageDetailModule();
  });

  it('should create an instance', () => {
    expect(pageDetailModule).toBeTruthy();
  });
});
