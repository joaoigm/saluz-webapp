import { Injectable } from '@angular/core';
import { Alojamento } from 'src/app/types/types';

@Injectable({
  providedIn: 'root'
})
export class AlojamentoService {

  constructor() {
    //
  }

  getAlojamentoFeminino(): Alojamento {
    return ALOJAMENTO_FEMININO_MOCK;
  }
}

const ALOJAMENTO_FEMININO_MOCK: Alojamento = {
  genero: 'F',
  camas: [
    { id: 1, disponivel: true, tipo: 'A' },
    { id: 2, disponivel: true, tipo: 'A' },
    { id: 3, disponivel: true, tipo: 'A' },
    { id: 4, disponivel: true, tipo: 'A' },
    { id: 5, disponivel: true, tipo: 'A' },
    { id: 6, disponivel: true, tipo: 'A' },
    { id: 7, disponivel: true, tipo: 'A' },
    { id: 8, disponivel: true, tipo: 'A' },
    { id: 9, disponivel: true, tipo: 'A' },
    { id: 1, disponivel: true  , tipo: 'B'},
    { id: 2, disponivel: true  , tipo: 'B'},
    { id: 3, disponivel: true  , tipo: 'B'},
    { id: 4, disponivel: true  , tipo: 'B'},
    { id: 5, disponivel: true  , tipo: 'B'},
    { id: 6, disponivel: true  , tipo: 'B'},
    { id: 7, disponivel: true  , tipo: 'B'},
    { id: 8, disponivel: false , tipo: 'B' },
  ]
};
