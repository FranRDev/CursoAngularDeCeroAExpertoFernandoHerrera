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

  conmutarContenido() {
    this.mostrarContenido.update(valor => !valor);
  }

}
