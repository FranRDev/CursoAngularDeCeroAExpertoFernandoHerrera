import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';

import { Pais } from '../interfaces/paises.interface';

@Injectable({providedIn: 'root'})
export class PaisesService {

  private urlBase: string = 'https://restcountries.com/v3.1';

  constructor(private clienteHttp: HttpClient) { }

  private obtenerBusquedaPaises(url: string): Observable<Pais[]> {
    return this.clienteHttp.get<Pais[]>(url).pipe(catchError(_ => of([])));
  }

  buscarCapital(busqueda: string): Observable<Pais[]> {
    return this.obtenerBusquedaPaises(`${this.urlBase}/capital/${busqueda}`);
  }

  buscarPais(busqueda: string): Observable<Pais[]> {
    return this.obtenerBusquedaPaises(`${this.urlBase}/name/${busqueda}`);
  }

  buscarPaisPorCodigoAlfa(codigo: string): Observable<Pais | null> {
    return this.clienteHttp.get<Pais[]>(`${this.urlBase}/alpha/${codigo}`).pipe(
      map(paises => paises.length > 0 ? paises[0] : null),
      catchError(_ => of(null))
    );
  }

  buscarRegion(busqueda: string): Observable<Pais[]> {
    return this.obtenerBusquedaPaises(`${this.urlBase}/region/${busqueda}`);
  }

}
