import { Component, OnInit } from '@angular/core';

import { Pais } from '../../interfaces/paises.interface';
import { Region } from '../../interfaces/paises.type';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'pagina-por-region',
  templateUrl: './por-region.component.html'
})
export class PaginaPorRegionComponent implements OnInit {

  public paises: Pais[] = [];
  public regiones: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public regionSeleccionada?: Region;
  public cargando: boolean = false;

  constructor(private servicioPaises: PaisesService) { }

  ngOnInit(): void {
    this.regionSeleccionada = this.servicioPaises.cache.porRegion.region;
    this.paises = this.servicioPaises.cache.porRegion.paises;
  }

  buscarPorRegion(region: Region): void {
    this.cargando = true;
    this.regionSeleccionada = region;

    this.servicioPaises.buscarRegion(region)
      .subscribe(paises => {
        this.paises = paises;
        this.cargando = false;
      });
  }

}
