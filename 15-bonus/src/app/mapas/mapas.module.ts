import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PaginaMapaComponent } from './pages/mapa/mapa.component';
import { VistaMapaComponent } from './components/vista-mapa/vista-mapa.component';
import { CargaComponent } from './components/carga/carga.component';

@NgModule({
  declarations: [PaginaMapaComponent, VistaMapaComponent, CargaComponent],
  imports: [CommonModule],
  exports: [PaginaMapaComponent]
})
export class MapasModule { }
