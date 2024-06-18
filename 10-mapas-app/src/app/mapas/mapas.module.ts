import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { MapaLayoutComponent } from './layout/mapa-layout/mapa-layout.component';
import { PaginaPantallaCompletaComponent } from './pages/pantalla-completa/pantalla-completa.component';
import { PaginaMarcadoresComponent } from './pages/marcadores/marcadores.component';
import { PaginaPropiedadesComponent } from './pages/propiedades/propiedades.component';
import { PaginaRangoZoomComponent } from './pages/rango-zoom/rango-zoom.component';


@NgModule({
  declarations: [
    MiniMapaComponent,
    MenuLateralComponent,
    MapaLayoutComponent,
    PaginaPantallaCompletaComponent,
    PaginaMarcadoresComponent,
    PaginaPropiedadesComponent,
    PaginaRangoZoomComponent
  ],
  imports: [
    CommonModule,
    MapasRoutingModule
  ]
})
export class MapasModule { }
