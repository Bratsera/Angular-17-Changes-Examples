import { TestBed } from '@angular/core/testing';

import { AutoIncrementService } from './auto-increment.service';

describe('AutoIncrementService', () => {
  let service: AutoIncrementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoIncrementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
