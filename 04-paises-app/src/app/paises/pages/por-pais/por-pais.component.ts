import { Component, OnInit } from '@angular/core';

import { Pais } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'pagina-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PaginaPorPaisComponent implements OnInit {

  public paises: Pais[] = [];
  public cargando: boolean = false;
  public valorInicial: string = '';

  constructor(private servicioPaises: PaisesService) { }

  ngOnInit(): void {
    this.valorInicial = this.servicioPaises.cache.porPais.busqueda;
    this.paises = this.servicioPaises.cache.porPais.paises;
  }

  buscarPorPais(busqueda: string): void {
    this.cargando = true;

    this.servicioPaises.buscarPais(busqueda)
      .subscribe(paises => {
        this.paises = paises;
        this.cargando = false;
      })
  }

}
