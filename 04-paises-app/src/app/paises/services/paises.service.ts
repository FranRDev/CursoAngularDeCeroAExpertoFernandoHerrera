import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pais } from '../interfaces/paises.interface';

@Injectable({providedIn: 'root'})
export class PaisesService {

  private urlBase: string = 'https://restcountries.com/v3.1';

  constructor(private clienteHttp: HttpClient) { }

  buscarCapital(busqueda: string): Observable<Pais[]> {
    return this.clienteHttp.get<Pais[]>(`${this.urlBase}/capital/${busqueda}`);
  }

}
