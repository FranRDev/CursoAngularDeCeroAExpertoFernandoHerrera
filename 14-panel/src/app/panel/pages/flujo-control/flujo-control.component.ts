import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './flujo-control.component.html',
  styles: ``
})
export default class FlujoControlComponent {

  mostrarContenido = signal(false);

  conmutarContenido() {
    this.mostrarContenido.update(valor => !valor);
  }

}
