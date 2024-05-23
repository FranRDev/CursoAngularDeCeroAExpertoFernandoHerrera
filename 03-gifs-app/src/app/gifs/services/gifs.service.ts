import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, RespuestaBusqueda } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class ServicioGifs {

  public listaGifs: Gif[] = [];
  private _historialBusquedas: string[] = [];
  private giphyApiKey: string = '';
  private baseUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private clienteHttp: HttpClient) {
    this.cargarAlmacenamientoLocal()
  }

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
    this.guardarAlmacenamientoLocal();
  }

  private guardarAlmacenamientoLocal(): void {
    localStorage.setItem('historial', JSON.stringify(this._historialBusquedas));
  }

  private cargarAlmacenamientoLocal(): void {
    if (!localStorage.getItem('historial')) { return; }
    this._historialBusquedas = JSON.parse(localStorage.getItem('historial')!);
    this.cargarBusquedaMasReciente();
  }

  private cargarBusquedaMasReciente(): void {
    if (this._historialBusquedas.length === 0) { return; }
    this.buscar(this._historialBusquedas[0]);
  }

  buscar(busqueda: string): void {
    if (busqueda.length === 0) { return; }
    this.organizarHistorial(busqueda);

    this.clienteHttp
      .get<RespuestaBusqueda>(`${this.baseUrl}/search`, { params: new HttpParams().set('api_key', this.giphyApiKey).set('q', busqueda).set('limit', 10) })
      .subscribe(respuesta => {
        this.listaGifs = respuesta.data;
      })
  }

}
