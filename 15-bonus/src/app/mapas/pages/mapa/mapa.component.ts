import { Component } from '@angular/core';

import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'pagina-mapa',
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class PaginaMapaComponent {

  constructor(private servicioLugares: LugaresService) { }

}
