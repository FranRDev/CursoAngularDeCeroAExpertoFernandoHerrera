import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public nombre: string = 'iron man';
  public edad: number = 45;

  get nombreMayusculas(): string {
    return this.nombre.toUpperCase();
  }

  obtenerDescripcionHeroe(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarHeroe(): void {
    this.nombre = 'spider-man';
  }

  cambiarEdad(): void {
    this.edad = 24;
  }

  reiniciar(): void {
    this.nombre = 'iron man';
    this.edad = 45;
  }

}
