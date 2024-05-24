import { Component } from '@angular/core';

import { Pais } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'pagina-por-region',
  templateUrl: './por-region.component.html'
})
export class PaginaPorRegionComponent {

  public paises: Pais[] = [];

  constructor(private servicioPaises: PaisesService) { }

  buscarPorRegion(busqueda: string): void {
    this.servicioPaises.buscarRegion(busqueda).subscribe(paises => this.paises = paises);
  }

}
