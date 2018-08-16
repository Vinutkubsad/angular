import { EduDetailsModule } from './edu-details.module';

describe('EduDetailsModule', () => {
  let eduDetailsModule: EduDetailsModule;

  beforeEach(() => {
    eduDetailsModule = new EduDetailsModule();
  });

  it('should create an instance', () => {
    expect(eduDetailsModule).toBeTruthy();
  });
});
