import { Component } from '@angular/core';

import { LugaresService, MapasService } from '../../services';

@Component({
  selector: 'boton-mi-localizacion',
  templateUrl: './boton-mi-localizacion.component.html',
  styleUrl: './boton-mi-localizacion.component.css'
})
export class BotonMiLocalizacionComponent {

  constructor(
    private servicioLugares: LugaresService,
    private servicioMapas: MapasService
  ) { }

  irAMiLocalizacion() {
    if (!this.servicioLugares.localizacionUsuarioLista) { throw Error('No hay localización de usuario') };
    if (!this.servicioMapas.mapaListo) { throw Error('No hay mapa disponible') };
    this.servicioMapas.volarA(this.servicioLugares.localizacionUsuario!);
  }

}
