import { TestBed, async, inject } from '@angular/core/testing';

import { AuthEditGuard } from './auth-edit.guard';

describe('AuthEditGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthEditGuard]
    });
  });

  it('should ...', inject([AuthEditGuard], (guard: AuthEditGuard) => {
    expect(guard).toBeTruthy();
  }));
});
