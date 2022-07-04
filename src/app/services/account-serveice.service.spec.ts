import { TestBed } from '@angular/core/testing';

import { AccountServeiceService } from './account-serveice.service';

describe('AccountServe=iceService', () => {
  let service: AccountServeiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountServeiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
