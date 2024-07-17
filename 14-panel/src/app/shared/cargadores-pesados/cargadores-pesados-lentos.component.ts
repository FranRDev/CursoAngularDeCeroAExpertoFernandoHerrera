import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cargadores-pesados-lentos',
  standalone: true,
  imports: [CommonModule],
  template: `<section [ngClass]="['w-full h-[600px]', claseCss]">Cargadores Pesados Lentos</section>`
})
export class CargadoresPesadosLentosComponent {

  @Input({ required: true }) claseCss!: string;

  constructor() {
    const inicio = Date.now();
    while (Date.now() - inicio < 3000) { }
    console.log('Cargado');
  }

}
