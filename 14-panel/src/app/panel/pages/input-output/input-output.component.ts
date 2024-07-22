import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetaProductoComponent } from './ui/tarjeta-producto/tarjeta-producto.component';

@Component({
  selector: 'input-output',
  standalone: true,
  imports: [CommonModule, TarjetaProductoComponent],
  templateUrl: './input-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class InputOutputComponent {

}
