import { TestBed } from '@angular/core/testing';

import { AlojamentoService } from './alojamento.service';

describe('AlojamentoService', () => {
  let service: AlojamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlojamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
