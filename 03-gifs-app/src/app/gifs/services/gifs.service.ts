import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _historialBusquedas: string[] = [];

  constructor() { }

  get hisotrialBusqueda() {
    return [...this._historialBusquedas];
  }

  buscar(busqueda: string): void {
    this._historialBusquedas.unshift(busqueda);
  }

}
