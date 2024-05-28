import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pagina-busqueda',
  templateUrl: './busqueda.component.html'
})
export class PaginaBusquedaComponent {

  public entradaBusqueda = new FormControl('');

}
