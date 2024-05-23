import { Component, Input } from '@angular/core';

import { Pais } from '../../interfaces/paises.interface';

@Component({
  selector: 'tabla-paises',
  templateUrl: './tabla.component.html',
  styles: `img { width: 35px }`
})
export class TablaPaisesComponent {

  @Input()
  public paises: Pais[] = [];

}
