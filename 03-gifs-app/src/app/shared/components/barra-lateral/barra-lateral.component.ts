import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServicioGifs } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrl: './barra-lateral.component.css'
})
export class BarraLateralComponent {

  constructor(private servicioGifs: ServicioGifs) { }

  get busquedas(): string[] {
    return this.servicioGifs.historialBusquedas;
  }

  buscar(busqueda: string): void {
    this.servicioGifs.buscar(busqueda);
  }

}
