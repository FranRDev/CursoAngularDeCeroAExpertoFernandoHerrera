import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'titulo',
  standalone: true,
  imports: [],
  template: `<h1 class="text-3xl mb-5">{{ titulo }}</h1>`
})
export class TituloComponent {

  @Input({ required: true }) titulo!: string;
  @Input({ transform: booleanAttribute }) sombra: boolean = false;

}
