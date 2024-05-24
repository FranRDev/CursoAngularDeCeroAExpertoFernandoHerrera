import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { Cache, Pais } from '../interfaces/paises.interface';
import { Region } from '../interfaces/paises.type';

@Injectable({ providedIn: 'root' })
export class PaisesService {

  private urlBase: string = 'https://restcountries.com/v3.1';

  public cache: Cache = {
    porCapital: { busqueda: '', paises: [] },
    porPais: { busqueda: '', paises: [] },
    porRegion: { region: '', paises: [] }
  }

  constructor(private clienteHttp: HttpClient) {
    this.cargarDeAlmacenamientoLocal();
  }

  private guardarEnAlmacenamientoLocal() {
    localStorage.setItem('cache', JSON.stringify(this.cache));
  }

  private cargarDeAlmacenamientoLocal() {
    if (!localStorage.getItem('cache')) { return; }
    this.cache = JSON.parse(localStorage.getItem('cache')!);
  }

  private obtenerBusquedaPaises(url: string): Observable<Pais[]> {
    return this.clienteHttp.get<Pais[]>(url).pipe(catchError(_ => of([])));
  }

  buscarCapital(busqueda: string): Observable<Pais[]> {
    return this.obtenerBusquedaPaises(`${this.urlBase}/capital/${busqueda}`)
      .pipe(
        tap(paises => this.cache.porCapital = { busqueda, paises }),
        tap(() => this.guardarEnAlmacenamientoLocal())
      );
  }

  buscarPais(busqueda: string): Observable<Pais[]> {
    return this.obtenerBusquedaPaises(`${this.urlBase}/name/${busqueda}`)
      .pipe(
        tap(paises => this.cache.porPais = { busqueda, paises }),
        tap(() => this.guardarEnAlmacenamientoLocal())
      );
  }

  buscarPaisPorCodigoAlfa(codigo: string): Observable<Pais | null> {
    return this.clienteHttp.get<Pais[]>(`${this.urlBase}/alpha/${codigo}`).pipe(
      map(paises => paises.length > 0 ? paises[0] : null),
      catchError(_ => of(null))
    );
  }

  buscarRegion(region: Region): Observable<Pais[]> {
    return this.obtenerBusquedaPaises(`${this.urlBase}/region/${region}`)
      .pipe(
        tap(paises => this.cache.porRegion = { region, paises }),
        tap(() => this.guardarEnAlmacenamientoLocal())
      );
  }

}
