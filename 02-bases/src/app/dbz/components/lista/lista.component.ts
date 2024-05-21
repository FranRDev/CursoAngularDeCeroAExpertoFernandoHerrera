import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  @Output()
  personajeEliminado: EventEmitter<string> = new EventEmitter();

  @Input()
  public listaPersonajes: Personaje[] = [
    {
      nombre: 'Trunks',
      poder: 10
    }
  ];

  eliminarPersonaje(id?: string): void {
    if (!id) {return; }
    this.personajeEliminado.emit(id);
  }

}
