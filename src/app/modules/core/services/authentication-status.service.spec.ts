import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationStatusService } from './authentication-status.service';

describe('AuthenticationStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationStatusService]
    });
  });

  it('should be created', inject([AuthenticationStatusService], (service: AuthenticationStatusService) => {
    expect(service).toBeTruthy();
  }));
});
