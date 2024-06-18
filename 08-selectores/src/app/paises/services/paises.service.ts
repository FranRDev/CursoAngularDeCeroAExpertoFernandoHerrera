import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, combineLatest, map, of } from 'rxjs';

import { Pais, PaisReducido, Region } from '../interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private urlBase: string = 'https://restcountries.com/v3.1'
  private _continentes: Region[] = [Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania]

  constructor(
    private clienteHttp: HttpClient
  ) { }

  get continentes(): Region[] {
    return [...this._continentes];
  }

  obtenerPaisesPorContinente(continente: Region): Observable<PaisReducido[]> {
    if (!continente) { return of([]); }

    const url: string = `${this.urlBase}/region/${continente}?fields=name,cca3,borders`;

    return this.clienteHttp
      .get<Pais[]>(url)
      .pipe(
        map(paises => paises.map(pais => ({
          nombre: pais.name.common,
          cca3: pais.cca3,
          fronteras: pais.borders ?? []
        })))
      );
  }

  obtenerPaisPorCodigoAlfa(codigo: string): Observable<PaisReducido> {
    const url: string = `${this.urlBase}/alpha/${codigo}?fields=name,cca3,borders`;

    return this.clienteHttp
      .get<Pais>(url)
      .pipe(
        map(pais => ({
          nombre: pais.name.common,
          cca3: pais.cca3,
          fronteras: pais.borders ?? []
        }))
      );
  }

  obtenerPaisesFronterasPorCodigoAlfa(fronteras: string[]): Observable<PaisReducido[]> {
    if (!fronteras || fronteras.length === 0) { return of([]); }

    const solicitudes: Observable<PaisReducido>[] = [];

    fronteras.forEach(codigo => {
      const solicitud = this.obtenerPaisPorCodigoAlfa(codigo);
      solicitudes.push(solicitud);
    });

    return combineLatest(solicitudes);
  }

}
