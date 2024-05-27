import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { PaginaHeroeComponent } from './pages/heroe/heroe.component';
import { PaginaLayoutComponent } from './pages/layout/layout.component';
import { PaginaListaComponent } from './pages/lista/lista.component';
import { PaginaAnhadirComponent } from './pages/anhadir/anhadir.component';
import { PaginaBusquedaComponent } from './pages/busqueda/busqueda.component';


@NgModule({
  declarations: [
    PaginaHeroeComponent,
    PaginaLayoutComponent,
    PaginaListaComponent,
    PaginaAnhadirComponent,
    PaginaBusquedaComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
