import { Component } from '@angular/core';
import { TituloComponent } from '@shared/titulo/titulo.component';

@Component({
  standalone: true,
  imports: [TituloComponent],
  template: `
    <titulo titulo="Transición de vista 2" />

    <section class="flex justify-end">
      <img srcset="https://picsum.photos/id/237/200/300" alt="Picsum" width="200" height="300" style="view-transition-name: perro;" />
      <div class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded" style="view-transition-name: caja;"></div>
    </section>
  `
})
export default class TransicionVistaComponent {

}
