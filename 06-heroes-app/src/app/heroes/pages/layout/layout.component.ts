import { Component } from '@angular/core';

@Component({
  selector: 'pagina-layout',
  templateUrl: './layout.component.html',
  styles: ``
})
export class PaginaLayoutComponent {

  public elementosMenu = [
    { etiqueta: 'Listado', icono: 'label', url: './lista' },
    { etiqueta: 'Añadir', icono: 'add', url: './anhadir' },
    { etiqueta: 'Buscar', icono: 'search', url: './busqueda' }
  ]

}
