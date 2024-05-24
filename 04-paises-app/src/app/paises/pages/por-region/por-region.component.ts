import { Component } from '@angular/core';

import { Pais } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'pagina-por-region',
  templateUrl: './por-region.component.html'
})
export class PaginaPorRegionComponent {

  public paises: Pais[] = [];
  public regiones: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public regionSeleccionada?: Region;

  constructor(private servicioPaises: PaisesService) { }

  buscarPorRegion(region: Region): void {
    this.regionSeleccionada = region;
    this.servicioPaises.buscarRegion(region).subscribe(paises => this.paises = paises);
  }

}
