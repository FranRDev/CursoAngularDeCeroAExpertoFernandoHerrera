import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Heroe } from '../interfaces/heroe.interface';
import { environments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})

export class HeroesService {

  constructor(private clienteHttp: HttpClient) { }

  private urlBase: string = environments.urlBase;

  public obtenerHeroes(): Observable<Heroe[]> {
    return this.clienteHttp.get<Heroe[]>(`${this.urlBase}/heroes`);
  }

}
