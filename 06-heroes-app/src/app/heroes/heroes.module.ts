import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { PaginaAnhadirComponent } from './pages/anhadir/anhadir.component';
import { PaginaBusquedaComponent } from './pages/busqueda/busqueda.component';
import { PaginaHeroeComponent } from './pages/heroe/heroe.component';
import { PaginaLayoutComponent } from './pages/layout/layout.component';
import { PaginaListaComponent } from './pages/lista/lista.component';

@NgModule({
  declarations: [
    PaginaAnhadirComponent,
    PaginaBusquedaComponent,
    PaginaHeroeComponent,
    PaginaLayoutComponent,
    PaginaListaComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
