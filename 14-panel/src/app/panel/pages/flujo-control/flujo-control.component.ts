import { Component, signal } from '@angular/core';

import { TituloComponent } from '@shared/titulo/titulo.component';

type Grado = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [TituloComponent],
  templateUrl: './flujo-control.component.html',
  styles: ``
})
export default class FlujoControlComponent {

  mostrarContenido = signal(false);
  grado = signal<Grado>('A');
  frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  frameworks2 = signal([]);

  conmutarContenido() {
    this.mostrarContenido.update(valor => !valor);
  }

}
