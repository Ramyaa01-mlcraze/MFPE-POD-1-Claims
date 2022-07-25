import { TestBed } from '@angular/core/testing';

import { SelectDetailService } from './select-detail.service';

describe('SelectDetailService', () => {
  let service: SelectDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
