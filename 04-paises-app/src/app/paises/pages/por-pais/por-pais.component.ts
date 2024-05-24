import { Component } from '@angular/core';

import { Pais } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'pagina-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PaginaPorPaisComponent {

  public paises: Pais[] = [];

  constructor(private servicioPaises: PaisesService) { }

  buscarPorPais(busqueda: string): void {
    this.servicioPaises.buscarPais(busqueda).subscribe(paises => this.paises = paises)
  }

}
