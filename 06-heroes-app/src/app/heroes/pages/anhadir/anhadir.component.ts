import { Component } from '@angular/core';

@Component({
  selector: 'pagina-anhadir',
  templateUrl: './anhadir.component.html',
  styles: ``
})
export class PaginaAnhadirComponent {

  public publicadores = [
    { id: 'DC Comics', desc: 'DC - Comics'},
    { id: 'Marvel Comics', desc: 'Marvel - Comics'}
  ];

}
