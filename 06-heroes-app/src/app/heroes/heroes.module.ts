import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ListaComponent } from './pages/lista/lista.component';
import { AnhadirComponent } from './pages/anhadir/anhadir.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';


@NgModule({
  declarations: [
    HeroeComponent,
    LayoutComponent,
    ListaComponent,
    AnhadirComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
