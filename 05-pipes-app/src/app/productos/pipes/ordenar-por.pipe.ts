import { Pipe, PipeTransform } from "@angular/core";

import { Heroe } from '../interfaces/heroe.interface';

@Pipe({ name: 'ordenarPor' })
export class OrdenarPorPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarPor?: keyof (Heroe) | ''): Heroe[] {
    console.log({ heroes, ordenarPor });

    switch (ordenarPor) {
      case 'nombre':
        return heroes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);

      case 'puedeVolar':
        return heroes.sort((a, b) => (a.puedeVolar > b.puedeVolar) ? 1 : -1);

      case 'color':
        return heroes.sort((a, b) => (a.color > b.color) ? 1 : -1);

      default:
        return heroes;
    }
  }

}
