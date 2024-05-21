import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {

  public personajes: Personaje[] = [
    { nombre: 'Krillin', poder: 1000 },
    { nombre: 'Goku', poder: 9500 },
    { nombre: 'Vegeta', poder: 7500 }
  ];

  nuevoPersonaje(personaje: Personaje): void {
    this.personajes.push(personaje);
  }

  eliminarPersonaje(indice: number): void {
    this.personajes.splice(indice, 1)
  }

  constructor() { }

}
