import { Component, Input } from '@angular/core';

@Component({
  selector: 'buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent {

  @Input()
  public placeholder: string = '';

}
