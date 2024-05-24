import { Component, OnInit } from '@angular/core';

import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/paises.interface';

@Component({
  selector: 'pagina-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PaginaPorCapitalComponent implements OnInit {

  public paises: Pais[] = [];
  public cargando: boolean = false;
  public valorInicial: string = '';

  constructor(private servicioPaises: PaisesService) { }

  ngOnInit(): void {
    this.valorInicial = this.servicioPaises.cache.porCapital.busqueda;
    this.paises = this.servicioPaises.cache.porCapital.paises;
  }

  buscarPorCapital(busqueda: string): void {
    this.cargando = true;

    this.servicioPaises.buscarCapital(busqueda)
      .subscribe(paises => {
        this.paises = paises;
        this.cargando = false;
      });
  }

}
