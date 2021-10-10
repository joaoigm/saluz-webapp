import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Alojamento } from 'src/app/types/types';

@Injectable({
  providedIn: 'root'
})
export class AlojamentoService {

  constructor(
    private http: HttpClient
  ) {
    //
  }

  getAlojamentoFeminino(): Observable<Alojamento> {
    return this.http.get<Alojamento[]>('/alojamento/feminino').pipe(
      map(result => result[0])
    );
  }

  getAlojamentoMasculino(): Observable<Alojamento> {
    return this.http.get<Alojamento[]>('/alojamento/masculino').pipe(
      map(result => result[0])
    );
  }
}

const ALOJAMENTO_FEMININO_MOCK: Alojamento[] = [{
  genero: 'F',
  camas: [
    { codigo: "1", disponivel: true },
    { codigo: "2", disponivel: true },
    { codigo: "3", disponivel: true },
    { codigo: "4", disponivel: true },
    { codigo: "5", disponivel: true },
    { codigo: "6", disponivel: true },
    { codigo: "7", disponivel: false },
    { codigo: "8", disponivel: false },
    { codigo: "9", disponivel: false },
    { codigo: "10", disponivel: true },
    { codigo: "11", disponivel: true },
    { codigo: "12", disponivel: true },
    { codigo: "13", disponivel: true },
    { codigo: "14", disponivel: true },
    { codigo: "15", disponivel: true },
    { codigo: "16", disponivel: true },
    { codigo: "17", disponivel: false },
  ]
}, {
  genero: 'M',
  camas: [
    { codigo: "1", disponivel: true },
    { codigo: "2", disponivel: true },
    { codigo: "3", disponivel: true },
    { codigo: "4", disponivel: true },
    { codigo: "5", disponivel: true },
    { codigo: "6", disponivel: true },
    { codigo: "7", disponivel: true },
    { codigo: "8", disponivel: true },
    { codigo: "9", disponivel: true },
    { codigo: "10", disponivel: true },
    { codigo: "11", disponivel: true },
    { codigo: "12", disponivel: true },
    { codigo: "13", disponivel: true },
    { codigo: "14", disponivel: true },
    { codigo: "15", disponivel: true },
    { codigo: "16", disponivel: true },
    { codigo: "17", disponivel: false },
  ]
}
];
