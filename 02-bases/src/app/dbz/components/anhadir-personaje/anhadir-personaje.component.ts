import { Component } from '@angular/core';

import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-anhadir-personaje',
  templateUrl: './anhadir-personaje.component.html'
})
export class AnhadirPersonajeComponent {

  public personaje: Personaje = {
    nombre: '',
    poder: 0
  }

  emitirPersonaje(): void {
    console.log(this.personaje);
  }

}
