import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LugaresService {

  localizacionUsuario?: [number, number];

  get localizacionUsuarioLista(): boolean {
    return !!this.localizacionUsuarioLista;
  }

  constructor() {
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

}
