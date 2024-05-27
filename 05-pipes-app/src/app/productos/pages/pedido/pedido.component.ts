import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'pagina-pedido',
  templateUrl: './pedido.component.html',
  styles: ``
})
export class PaginaPedidoComponent {

  public esMayusculas: boolean = false;

  public heroes: Heroe[] = [
    { nombre: 'Superman', puedeVolar: true, color: Color.azul },
    { nombre: 'Batman', puedeVolar: false, color: Color.negro },
    { nombre: 'Daredevil', puedeVolar: false, color: Color.rojo },
    { nombre: 'Robin', puedeVolar: false, color: Color.rojo },
    { nombre: 'Linterna Verde', puedeVolar: true, color: Color.verde }
  ];

  public conmutarMayusculas(): void {
    this.esMayusculas = !this.esMayusculas;
  }

}
