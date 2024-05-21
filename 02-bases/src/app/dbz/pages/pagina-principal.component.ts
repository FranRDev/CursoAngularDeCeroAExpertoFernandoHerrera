import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-pagina-principal',
  templateUrl: './pagina-principal.component.html'
})

export class PaginaPrincipalComponent {

  constructor(private dbzService: DbzService) { }

  get personajes(): Personaje[] {
    return [...this.dbzService.personajes];
  }

  eliminarPersonaje(id: string): void {
    this.dbzService.eliminarPersonaje(id);
  }

  nuevoPersonaje(personaje: Personaje): void {
    this.dbzService.nuevoPersonaje(personaje);
  }

}
