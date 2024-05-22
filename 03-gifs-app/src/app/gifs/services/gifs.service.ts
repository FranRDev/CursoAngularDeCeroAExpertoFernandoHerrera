import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {

  private _historialBusquedas: string[] = [];
  private giphyApiKey: string = '';

  constructor() { }

  get historialBusquedas() {
    return [...this._historialBusquedas];
  }

  private organizarHistorial(busqueda: string): void {
    busqueda = busqueda.toLowerCase();

    if (this._historialBusquedas.includes(busqueda)) {
      this._historialBusquedas = this._historialBusquedas.filter((busquedaAnterior) => busquedaAnterior !== busqueda);
    }

    this._historialBusquedas.unshift(busqueda);
    this._historialBusquedas = this._historialBusquedas.splice(0, 10);
  }

  buscar(busqueda: string): void {
    if (busqueda.length === 0) { return; }
    this.organizarHistorial(busqueda);
  }

}
