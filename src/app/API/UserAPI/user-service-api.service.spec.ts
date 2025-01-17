import { TestBed } from '@angular/core/testing';

import { UserServiceAPIService } from './user-service-api.service';

describe('UserServiceAPIService', () => {
  let service: UserServiceAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
