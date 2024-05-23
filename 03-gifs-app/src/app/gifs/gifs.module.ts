import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ListaGifsComponent } from './components/lista/lista.component';
import { TarjetaGifComponent } from './components/tarjeta/tarjeta.component';

@NgModule({
  declarations: [
    InicioComponent,
    BuscadorComponent,
    ListaGifsComponent,
    TarjetaGifComponent
  ],
  exports: [
    InicioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
