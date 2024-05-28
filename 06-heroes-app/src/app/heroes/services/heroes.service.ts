import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

import { Heroe } from '../interfaces/heroe.interface';
import { environments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})

export class HeroesService {

  constructor(private clienteHttp: HttpClient) { }

  private urlBase: string = environments.urlBase;

  public obtenerHeroes(): Observable<Heroe[]> {
    return this.clienteHttp.get<Heroe[]>(`${this.urlBase}/heroes`);
  }

  public obtenerHeroePorId(id: string): Observable<Heroe | undefined> {
    return this.clienteHttp.get<Heroe>(`${this.urlBase}/heroes/${id}`).pipe(catchError(_ => of(undefined)));
  }

  public obtenerSugerencias(busqueda: string): Observable<Heroe[]> {
    return this.clienteHttp.get<Heroe[]>(`${this.urlBase}/heroes?q=${busqueda}&_limit=6`);
  }

  public anhadirHeroe(heroe: Heroe): Observable<Heroe> {
    return this.clienteHttp.post<Heroe>(`${this.urlBase}/heroes`, heroe);
  }

  public actualizarHeroe(heroe: Heroe): Observable<Heroe> {
    if (!heroe.id) { throw Error('ID es requerido'); }
    return this.clienteHttp.patch<Heroe>(`${this.urlBase}/heroes/${heroe.id}`, heroe);
  }

  public eliminarHeroePorId(id: string): Observable<boolean> {
    return this.clienteHttp.delete<Heroe>(`${this.urlBase}/heroes/${id}`).pipe(map(_ => true), catchError(_ => of(false)));
  }

}
