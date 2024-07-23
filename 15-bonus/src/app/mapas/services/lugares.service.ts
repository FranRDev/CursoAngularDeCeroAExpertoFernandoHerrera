import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Feature, RespuestaLugares } from '../interfaces/lugares.interface';

@Injectable({ providedIn: 'root' })
export class LugaresService {

  localizacionUsuario?: [number, number];

  get localizacionUsuarioLista(): boolean {
    return !!this.localizacionUsuario;
  }

  cargandoLugares: boolean = false;
  lugares: Feature[] = [];

  constructor(private clienteHttp: HttpClient) {
    this.obtenerLocalizacionUsuario();
  }

  obtenerLocalizacionUsuario(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords: coordenadas }) => {
          this.localizacionUsuario = [coordenadas.longitude, coordenadas.latitude];
          resolve(this.localizacionUsuario);
        },
        (error) => {
          alert('No se pudo obtener la geolocalización');
          console.log(error);
          reject();
        }
      );
    });
  }

  obtenerLugaresPorBusqueda(busqueda: string = '') {
    // TODO: Evaluar búsqueda vacía.

    this.cargandoLugares = true;

    this.clienteHttp.get<RespuestaLugares>(`https://api.mapbox.com/search/geocode/v6/forward?q=${busqueda}&proximity=-84.2448778042322%2C10.076706870292938&access_token=`)
      .subscribe(respuesta => {
        console.log(respuesta.features);

        this.lugares = respuesta.features;
        this.cargandoLugares = false;
      });
  }

}
