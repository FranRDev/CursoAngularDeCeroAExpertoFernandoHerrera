import { ChangeDetectionStrategy, Component, effect, input, output } from '@angular/core';
import { Producto } from '@interfaces/producto.interface';

@Component({
  selector: 'tarjeta-producto',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-producto.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TarjetaProductoComponent {

  producto = input.required<Producto>();
  incrementoCantidad = output<number>();

  incrementarCantidad() {
    this.incrementoCantidad.emit(this.producto().cantidad + 1);
  }

  efectoRegistro = effect(() => {
    console.log(this.producto().nombre);
  });

}
