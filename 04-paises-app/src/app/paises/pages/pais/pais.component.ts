import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'pagina-pais',
  templateUrl: './pais.component.html'
})
export class PaginaPaisComponent implements OnInit {

  constructor(
    private enrutador: Router,
    private rutaActiva: ActivatedRoute,
    private servicioPaises: PaisesService
  ) { }

  ngOnInit(): void {
    this.rutaActiva.params
      .pipe(switchMap(({id}) => this.servicioPaises.buscarPaisPorCodigoAlfa(id)))
      .subscribe(pais => {
        if (!pais) {
          return this.enrutador.navigateByUrl('');
        }

        console.log('Tenemos un país');
        return;
      });
  }

}
