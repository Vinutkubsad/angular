import { StudentDetailModule } from './student-detail.module';

describe('StudentDetailModule', () => {
  let studentDetailModule: StudentDetailModule;

  beforeEach(() => {
    studentDetailModule = new StudentDetailModule();
  });

  it('should create an instance', () => {
    expect(studentDetailModule).toBeTruthy();
  });
});
