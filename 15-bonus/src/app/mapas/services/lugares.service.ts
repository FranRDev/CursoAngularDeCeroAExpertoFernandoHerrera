import { Injectable } from '@angular/core';

import { ClienteApiLugares } from '../api';
import { Feature, RespuestaLugares } from '../interfaces/lugares.interface';
import { MapaService } from './mapas.service';

@Injectable({ providedIn: 'root' })
export class LugaresService {

  localizacionUsuario?: [number, number];

  get localizacionUsuarioLista(): boolean {
    return !!this.localizacionUsuario;
  }

  cargandoLugares: boolean = false;
  lugares: Feature[] = [];

  constructor(
    private clienteApiLugares: ClienteApiLugares,
    private servicioMapa: MapaService
  ) {
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
    if (busqueda.length === 0) {
      this.cargandoLugares = false;
      this.lugares = [];
      return;
    }

    if (!this.localizacionUsuario) { throw new Error('No hay localización de usuario'); }

    this.cargandoLugares = true;

    this.clienteApiLugares.get<RespuestaLugares>(busqueda, { params: { proximity: this.localizacionUsuario.join(',') } })
      .subscribe(respuesta => {
        this.cargandoLugares = false;
        this.lugares = respuesta.features;
        this.servicioMapa.crearMarcadoresDeLugares(this.lugares, this.localizacionUsuario!);
      });
  }

  borrarLugares() {
    this.lugares = [];
  }

}
