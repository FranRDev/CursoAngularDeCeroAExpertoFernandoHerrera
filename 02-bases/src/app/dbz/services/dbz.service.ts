import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Personaje } from '../interfaces/personaje.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {

  public personajes: Personaje[] = [
    { id: uuid(), nombre: 'Krillin', poder: 1000 },
    { id: uuid(), nombre: 'Goku', poder: 9500 },
    { id: uuid(), nombre: 'Vegeta', poder: 7500 }
  ];

  nuevoPersonaje(personaje: Personaje): void {
    const personajeNuevo: Personaje = { ...personaje, id: uuid() };
    this.personajes.push(personajeNuevo);
  }

  eliminarPersonaje(id: string): void {
    this.personajes = this.personajes.filter(personaje => personaje.id !== id);
  }

  constructor() { }

}
