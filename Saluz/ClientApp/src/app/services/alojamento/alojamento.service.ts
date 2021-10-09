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
  vagasDisponiveis: 17,
  camaA: [
    { id: 1, disponivel: true },
    { id: 2, disponivel: true },
    { id: 3, disponivel: true },
    { id: 4, disponivel: true },
    { id: 5, disponivel: true },
    { id: 6, disponivel: true },
    { id: 7, disponivel: true },
    { id: 8, disponivel: true },
    { id: 9, disponivel: true }
  ],
  camaB: [
    { id: 1, disponivel: true },
    { id: 2, disponivel: true },
    { id: 3, disponivel: true },
    { id: 4, disponivel: true },
    { id: 5, disponivel: true },
    { id: 6, disponivel: true },
    { id: 7, disponivel: true },
    { id: 8, disponivel: false },
  ]
};
