import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, RespuestaBusqueda } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {

  public listaGifs: Gif[] = [];
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

    this.clienteHttp
      .get<RespuestaBusqueda>(`${this.baseUrl}/search`, { params: new HttpParams().set('api_key', this.giphyApiKey).set('q', busqueda).set('limit', 10) })
      .subscribe(respuesta => {
        this.listaGifs = respuesta.data;
        console.log({gifs: this.listaGifs});
      })
  }

}
