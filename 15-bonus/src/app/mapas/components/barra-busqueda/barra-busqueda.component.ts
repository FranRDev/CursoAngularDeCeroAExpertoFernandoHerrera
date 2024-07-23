import { Component } from '@angular/core';

@Component({
  selector: 'barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrl: './barra-busqueda.component.css'
})
export class BarraBusquedaComponent {

  private temporizador?: NodeJS.Timeout;

  busquedaCambiada(busqueda: string = '') {
    if (this.temporizador) { clearTimeout(this.temporizador); }
    this.temporizador = setTimeout(() => {
      console.log('Búsqueda: ', busqueda);
    }, 500);
  }

}
