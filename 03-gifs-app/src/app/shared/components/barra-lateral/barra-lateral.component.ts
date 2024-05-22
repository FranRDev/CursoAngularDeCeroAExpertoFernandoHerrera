import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrl: './barra-lateral.component.css'
})
export class BarraLateralComponent {

  constructor(private gifsService: GifsService) { }

  get busquedas() {
    return this.gifsService.hisotrialBusqueda;
  }

}
