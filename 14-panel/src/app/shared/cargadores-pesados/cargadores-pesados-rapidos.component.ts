import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cargadores-pesados-rapidos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[600px]', claseCss]">
      <ng-content />
    </section>
  `
})
export class CargadoresPesadosRapidosComponent {

  @Input({ required: true }) claseCss!: string;

  constructor() {
    console.log('CargadoresPesadosRapidosComponent creado');
  }

}
