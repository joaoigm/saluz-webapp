import { TestBed } from '@angular/core/testing';

import { BarracasService } from './barracas.service';

describe('barracasService', () => {
  let service: BarracasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarracasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
