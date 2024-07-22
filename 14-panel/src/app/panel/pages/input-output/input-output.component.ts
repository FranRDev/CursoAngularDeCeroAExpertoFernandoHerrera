import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetaProductoComponent } from './ui/tarjeta-producto/tarjeta-producto.component';
import { Producto } from '@interfaces/producto.interface';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'input-output',
  standalone: true,
  imports: [CommonModule, TarjetaProductoComponent],
  templateUrl: './input-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class InputOutputComponent implements OnDestroy {
  productos = signal<Producto[]>([
    { id: 1, nombre: `Producto 1`, cantidad: 0 },
    { id: 2, nombre: `Producto 2`, cantidad: 0 }
  ]);

  private intervaloSuscripcion = interval(1000)
    .pipe(
      tap(() => {
        this.productos.update((productos) => [
          ...productos,
          { id: productos.length + 1, nombre: `Producto ${productos.length + 1}`, cantidad: 0 }
        ])
      }),
      take(7)
    )
    .subscribe();

    ngOnDestroy(): void {
      this.intervaloSuscripcion.unsubscribe();
    }

}
