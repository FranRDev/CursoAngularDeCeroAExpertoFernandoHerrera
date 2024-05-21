import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  @Input()
  public listaPersonajes: Personaje[] = [
    {
      nombre: 'Trunks',
      poder: 10
    }
  ];

}
