import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {

  private _historialBusquedas: string[] = [];
  private giphyApiKey: string = '';
  private baseUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private clienteHttp: HttpClient) { }

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

    const parametros = new HttpParams()
      .set('api_key', this.giphyApiKey)
      .set('q', busqueda)
      .set('limit', 10)

    this.clienteHttp
      .get(`${this.baseUrl}/search`, { params: parametros })
      .subscribe(respuesta => {
        console.log(respuesta);
      })
  }

}
