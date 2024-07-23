import { Component } from '@angular/core';

import { LugaresService } from '../../services';

@Component({
  selector: 'pagina-mapa',
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class PaginaMapaComponent {

  constructor(private servicioLugares: LugaresService) { }

  public hola: boolean = true;

  get localizacionUsuarioLista() {
    return this.servicioLugares.localizacionUsuarioLista;
  }

}
