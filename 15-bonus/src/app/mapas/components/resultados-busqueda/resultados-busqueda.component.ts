import { Component } from '@angular/core';

import { LugaresService, MapaService } from '../../services';
import { Feature } from '../../interfaces/lugares.interface';

@Component({
  selector: 'resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrl: './resultados-busqueda.component.css'
})
export class ResultadosBusquedaComponent {

  idSeleccionado: string = '';

  constructor(
    private servicioLugares: LugaresService,
    private servicioMapa: MapaService
  ) { }

  get cargandoLugares() {
    return this.servicioLugares.cargandoLugares;
  }

  get lugares() {
    return this.servicioLugares.lugares;
  }

  volarA(lugar: Feature) {
    this.idSeleccionado = lugar.id;
    const [lng, lat] = lugar.geometry.coordinates;
    this.servicioMapa.volarA([lng, lat]);
  }

}
