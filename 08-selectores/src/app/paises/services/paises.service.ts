import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map, of } from 'rxjs';

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

}
