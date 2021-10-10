import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Barracas } from 'src/app/types/types';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BarracasService {

  constructor(
    private http: HttpClient
  ) {
    //
  }

  getbarracasFeminino(): Observable<Barracas> {
    return this.http.get<Barracas>('barracas').pipe(
      map(result => result.filter(barraca => barraca.genero === 'F' || barraca.genero === ''))
    )
  }

  getbarracasMasculino(): Observable<Barracas> {
    return this.http.get<Barracas>('barracas').pipe(
      map(result => result.filter(barraca => barraca.genero === 'M' || barraca.genero === ''))
    )
  }
}


const CABANAS_MOCK: Barracas = [
  {
    codigo: "1",
    genero: '',
    vagas: [
      {
        codigo: "1",
        disponivel: true
      },
      {
        codigo: "2",
        disponivel: true
      }
    ]
  },
  {
    codigo: "2",
    genero: '',
    vagas: [
      {
        codigo: "1",
        disponivel: true
      },
      {
        codigo: "2",
        disponivel: true
      }
    ]
  },
  {
    codigo: "3",
    genero: 'M',
    vagas: [
      {
        codigo: "1",
        disponivel: true
      },
      {
        codigo: "2",
        disponivel: false
      }
    ]
  },
  {
    codigo: "4",
    genero: '',
    vagas: [
      {
        codigo: "1",
        disponivel: true
      },
      {
        codigo: "2",
        disponivel: true
      }
    ]
  },
  {
    codigo: "5",
    genero: 'F',
    vagas: [
      {
        codigo: "1",
        disponivel: false
      },
      {
        codigo: "2",
        disponivel: true
      }
    ]
  },
  {
    codigo: "6",
    genero: '',
    vagas: [
      {
        codigo: "1",
        disponivel: true
      },
      {
        codigo: "2",
        disponivel: true
      }
    ]
  },
  {
    codigo: "7",
    genero: 'F',
    vagas: [
      {
        codigo: "1",
        disponivel: true
      },
      {
        codigo: "2",
        disponivel: false
      }
    ]
  },
  {
    codigo: "8",
    genero: '',
    vagas: [
      {
        codigo: "1",
        disponivel: true
      },
      {
        codigo: "2",
        disponivel: true
      }
    ]
  },
  {
    codigo: "9",
    genero: '',
    vagas: [
      {
        codigo: "1",
        disponivel: true
      },
      {
        codigo: "2",
        disponivel: true
      }
    ]
  },
  {
    codigo: "10",
    genero: '',
    vagas: [
      {
        codigo: "1",
        disponivel: true
      },
      {
        codigo: "2",
        disponivel: true
      }
    ]
  }
];

