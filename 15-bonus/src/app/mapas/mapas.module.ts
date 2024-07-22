import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PaginaMapaComponent } from './pages/mapa/mapa.component';

@NgModule({
  declarations: [PaginaMapaComponent],
  imports: [CommonModule],
  exports: [PaginaMapaComponent]
})
export class MapasModule { }
