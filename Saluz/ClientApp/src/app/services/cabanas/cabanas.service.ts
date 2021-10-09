import { Injectable } from '@angular/core';
import { Cabanas } from 'src/app/types/types';

@Injectable({
  providedIn: 'root'
})
export class CabanasService {

  constructor() {
    //
  }

  getCabanasFeminino(): Cabanas {
    return CABANAS_MOCK;
  }
}


const CABANAS_MOCK: Cabanas = [
  {
    id: 1,
    vagas: [
      {
        id: 1,
        disponivel: true
      },
      {
        id: 2,
        disponivel: true
      }
    ]
  },
  {
    id: 2,
    vagas: [
      {
        id: 1,
        disponivel: true
      },
      {
        id: 2,
        disponivel: true
      }
    ]
  },
  {
    id: 3,
    vagas: [
      {
        id: 1,
        disponivel: true
      },
      {
        id: 2,
        disponivel: true
      }
    ]
  },
  {
    id: 4,
    vagas: [
      {
        id: 1,
        disponivel: false
      },
      {
        id: 2,
        disponivel: true
      }
    ]
  },
  {
    id: 5,
    vagas: [
      {
        id: 1,
        disponivel: true
      },
      {
        id: 2,
        disponivel: true
      }
    ]
  }
];

