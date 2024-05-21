import { Component, EventEmitter, Output } from '@angular/core';

import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-anhadir-personaje',
  templateUrl: './anhadir-personaje.component.html'
})
export class AnhadirPersonajeComponent {

  @Output()
  nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje: Personaje = {
    nombre: '',
    poder: 0
  }

  emitirPersonaje(): void {
    console.log(this.personaje);

    if (this.personaje.nombre.length === 0) { return; }
    this.nuevoPersonaje.emit(this.personaje);
    this.personaje.nombre = '';
    this.personaje.poder = 0;
  }

}
