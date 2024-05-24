import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

import { Pais } from '../interfaces/paises.interface';

@Injectable({providedIn: 'root'})
export class PaisesService {

  private urlBase: string = 'https://restcountries.com/v3.1';

  constructor(private clienteHttp: HttpClient) { }

  buscarCapital(busqueda: string): Observable<Pais[]> {
    return this.clienteHttp.get<Pais[]>(`${this.urlBase}/capital/${busqueda}`).pipe(catchError(_ => of([])));
  }

  buscarPais(busqueda: string): Observable<Pais[]> {
    return this.clienteHttp.get<Pais[]>(`${this.urlBase}/name/${busqueda}`).pipe(catchError(_ => of([])));
  }

  buscarPaisPorCodigoAlfa(codigo: string): Observable<Pais | null> {
    return this.clienteHttp.get<Pais[]>(`${this.urlBase}/alpha/${codigo}`).pipe(
      map(paises => paises.length > 0 ? paises[0] : null),
      catchError(_ => of(null))
    );
  }

  buscarRegion(busqueda: string): Observable<Pais[]> {
    return this.clienteHttp.get<Pais[]>(`${this.urlBase}/region/${busqueda}`).pipe(catchError(_ => of([])));
  }

}
