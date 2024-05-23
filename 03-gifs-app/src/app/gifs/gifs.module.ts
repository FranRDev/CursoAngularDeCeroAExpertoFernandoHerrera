import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BuscadorComponent } from './components/buscador/buscador.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaGifsComponent } from './components/lista/lista.component';
import { SharedModule } from '../shared/shared.module';
import { TarjetaGifComponent } from './components/tarjeta/tarjeta.component';

@NgModule({
  declarations: [
    BuscadorComponent,
    InicioComponent,
    ListaGifsComponent,
    TarjetaGifComponent
  ],
  exports: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GifsModule { }
