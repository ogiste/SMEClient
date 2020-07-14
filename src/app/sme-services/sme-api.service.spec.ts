import {TestBed} from '@angular/core/testing';

import {SmeApiService} from './sme-api.service';

describe('SmeApiService', () => {
  let service: SmeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
