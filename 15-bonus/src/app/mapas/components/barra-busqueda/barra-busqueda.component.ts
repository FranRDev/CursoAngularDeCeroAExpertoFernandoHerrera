import { Component } from '@angular/core';

import { LugaresService } from '../../services';

@Component({
  selector: 'barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrl: './barra-busqueda.component.css'
})
export class BarraBusquedaComponent {

  private temporizador?: NodeJS.Timeout;

  constructor(private servicioLugares: LugaresService) { }

  busquedaCambiada(busqueda: string = '') {
    if (this.temporizador) { clearTimeout(this.temporizador); }

    this.temporizador = setTimeout(() => {
      this.servicioLugares.obtenerLugaresPorBusqueda(busqueda);
    }, 500);
  }

}
