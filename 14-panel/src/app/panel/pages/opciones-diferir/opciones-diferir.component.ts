import { Component } from '@angular/core';

import { CargadoresPesadosRapidosComponent } from '@shared/cargadores-pesados/cargadores-pesados-rapidos.component';
import { TituloComponent } from '@shared/titulo/titulo.component';

@Component({
  standalone: true,
  imports: [TituloComponent, CargadoresPesadosRapidosComponent, TituloComponent],
  templateUrl: './opciones-diferir.component.html',
  styles: ``
})
export default class OpcionesDiferirComponent {

}
