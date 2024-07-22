import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'opciones-pagina-botones',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './opciones-pagina-botones.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpcionesPaginaBotonesComponent {

  abrirEnlace(event: MouseEvent): void {
    console.log(event);
  }

}
