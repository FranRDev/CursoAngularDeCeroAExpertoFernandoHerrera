import { Component } from '@angular/core';

import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/paises.interface';

@Component({
  selector: 'pagina-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PaginaPorCapitalComponent {

  public paises: Pais[] = [];

  constructor(private servicioPaises: PaisesService) { }

  buscarPorCapital(busqueda: string): void {
    this.servicioPaises.buscarCapital(busqueda).subscribe(paises => this.paises = paises);
  }

}
