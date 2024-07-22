import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

import { OpcionesPaginaBotonesComponent } from './ui/opciones-pagina-botones/opciones-pagina-botones.component';

@Component({
  selector: 'material',
  standalone: true,
  imports: [MatSlideToggleModule, MatIconModule, MatButtonModule, MatBadgeModule, MatBottomSheetModule],
  templateUrl: './material.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class MaterialComponent {

  constructor(private hojaBotones: MatBottomSheet) { }

  abrirHojaBotones() {
    this.hojaBotones.open(OpcionesPaginaBotonesComponent);
  }

}
