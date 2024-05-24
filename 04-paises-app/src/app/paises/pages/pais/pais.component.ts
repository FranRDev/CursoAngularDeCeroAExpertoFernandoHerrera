import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'pagina-pais',
  templateUrl: './pais.component.html'
})
export class PaginaPaisComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute, private servicioPaises: PaisesService) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(({id}) => {
      this.servicioPaises.buscarPorCodigoAlfa(id).subscribe(pais => console.log({pais}));
    });
  }

}
