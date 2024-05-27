import { Component } from '@angular/core';

@Component({
  selector: 'pagina-pedido',
  templateUrl: './pedido.component.html',
  styles: ``
})
export class PaginaPedidoComponent {

  public esMayusculas: boolean = false;

  public conmutarMayusculas(): void {
    this.esMayusculas = !this.esMayusculas;
  }

}
