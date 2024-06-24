import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = environment.mapbox_token;

import { ContadorComponent } from '../solo/components/contador/contador.component';
import { environment } from '../../environments/environment';
import { MapaLayoutComponent } from './layout/mapa-layout/mapa-layout.component';
import { MapasRoutingModule } from './mapas-routing.module';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { PaginaMarcadoresComponent } from './pages/marcadores/marcadores.component';
import { PaginaPantallaCompletaComponent } from './pages/pantalla-completa/pantalla-completa.component';
import { PaginaPropiedadesComponent } from './pages/propiedades/propiedades.component';
import { PaginaRangoZoomComponent } from './pages/rango-zoom/rango-zoom.component';

@NgModule({
  declarations: [
    MapaLayoutComponent,
    MenuLateralComponent,
    MiniMapaComponent,
    PaginaMarcadoresComponent,
    PaginaPantallaCompletaComponent,
    PaginaPropiedadesComponent,
    PaginaRangoZoomComponent
  ],
  imports: [
    CommonModule,
    ContadorComponent,
    MapasRoutingModule
  ]
})
export class MapasModule { }
