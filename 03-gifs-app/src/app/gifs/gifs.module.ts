import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ListaGifsComponent } from './components/lista-gifs/lista-gifs.component';
import { TarjetaGifComponent } from './components/tarjeta-gif/tarjeta-gif.component';

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
