import { Component } from '@angular/core';
import { ServicioGifs } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrl: './barra-lateral.component.css'
})
export class BarraLateralComponent {

  constructor(private gifsService: ServicioGifs) { }

  get busquedas() {
    return this.gifsService.historialBusquedas;
  }

}
