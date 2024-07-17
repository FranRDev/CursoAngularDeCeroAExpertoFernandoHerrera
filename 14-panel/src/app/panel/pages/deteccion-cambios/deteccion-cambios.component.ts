import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { TituloComponent } from '@shared/titulo/titulo.component';

@Component({
  standalone: true,
  imports: [CommonModule, TituloComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <titulo [titulo]="frameworkActual()" />
    <pre>{{ frameworkSenhal() | json }}</pre>
    <pre>{{ frameworkPropiedad | json }}</pre>
  `,
  styles: ``
})
export default class DeteccionCambiosComponent {

  frameworkActual = computed(() => `Detección de cambio - ${this.frameworkSenhal().nombre}`);
  frameworkSenhal = signal({ nombre: 'Angular', lanzamiento: 2016 });
  frameworkPropiedad = { nombre: 'Angular', lanzamiento: 2016 };

  constructor() {
    setTimeout(() => {
      // this.frameworkPropiedad.nombre = 'React';
      this.frameworkSenhal.update(valor => ({ ...valor, nombre: 'React' }));
      console.log('Hecho');
    }, 3000);
  }

}
