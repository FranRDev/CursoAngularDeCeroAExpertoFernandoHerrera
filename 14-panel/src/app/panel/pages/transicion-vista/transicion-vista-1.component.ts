import { Component } from '@angular/core';
import { TituloComponent } from '@shared/titulo/titulo.component';

@Component({
  standalone: true,
  imports: [TituloComponent],
  template: `
    <titulo titulo="Transición de vista 1" />

    <section class="flex justify-start">
      <img srcset="https://picsum.photos/id/237/200/300" alt="Picsum" width="200" height="300" style="view-transition-name: perro;" />
      <div class="bg-blue-500 w-56 h-56" style="view-transition-name: caja;"></div>
    </section>
  `
})
export default class TransicionVistaComponent {

}
