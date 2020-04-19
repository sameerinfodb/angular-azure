import { TestBed } from '@angular/core/testing';

import { CompDetailService } from './comp-detail.service';

describe('CompDetailService', () => {
  let service: CompDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
