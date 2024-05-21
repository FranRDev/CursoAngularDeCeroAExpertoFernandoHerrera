import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-pagina-principal',
  templateUrl: './pagina-principal.component.html'
})

export class PaginaPrincipalComponent {

  public personajes: Personaje[] = [
    {
      nombre: 'Krillin',
      poder: 1000
    },
    {
      nombre: 'Goku',
      poder: 9500
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  nuevoPersonaje(personaje: Personaje): void {
    console.log(personaje);

  }

}
