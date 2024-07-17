import { Component, signal } from '@angular/core';

type Grado = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [],
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
