import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { ImagenHeroePipe } from './pipes/imagen-heroe.pipe';
import { MaterialModule } from '../material/material.module';
import { PaginaAnhadirComponent } from './pages/anhadir/anhadir.component';
import { PaginaBusquedaComponent } from './pages/busqueda/busqueda.component';
import { PaginaHeroeComponent } from './pages/heroe/heroe.component';
import { PaginaLayoutComponent } from './pages/layout/layout.component';
import { PaginaListaComponent } from './pages/lista/lista.component';
import { TarjetaHeroeComponent } from './components/tarjeta-heroe/tarjeta-heroe.component';

@NgModule({
  declarations: [
    ImagenHeroePipe,
    PaginaAnhadirComponent,
    PaginaBusquedaComponent,
    PaginaHeroeComponent,
    PaginaLayoutComponent,
    PaginaListaComponent,
    TarjetaHeroeComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
