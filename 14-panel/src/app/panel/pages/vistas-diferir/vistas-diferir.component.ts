import { Component } from '@angular/core';

import { CargadoresPesadosLentosComponent } from '@shared/cargadores-pesados/cargadores-pesados-lentos.component';
import { TituloComponent } from '@shared/titulo/titulo.component';

@Component({
  standalone: true,
  imports: [CargadoresPesadosLentosComponent, TituloComponent],
  templateUrl: './vistas-diferir.component.html'
})
export default class VistasDiferirComponent {

}
