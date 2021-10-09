import { TestBed } from '@angular/core/testing';

import { CabanasService } from './cabanas.service';

describe('CabanasService', () => {
  let service: CabanasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabanasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
