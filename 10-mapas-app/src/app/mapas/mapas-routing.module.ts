import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapaLayoutComponent } from './layout/mapa-layout/mapa-layout.component';
import { PaginaMarcadoresComponent } from './pages/marcadores/marcadores.component';
import { PaginaPantallaCompletaComponent } from './pages/pantalla-completa/pantalla-completa.component';
import { PaginaPropiedadesComponent } from './pages/propiedades/propiedades.component';
import { PaginaRangoZoomComponent } from './pages/rango-zoom/rango-zoom.component';

const routes: Routes = [
  {
    path: '',
    component: MapaLayoutComponent,
    children: [
      { path: 'pantalla-completa', component: PaginaPantallaCompletaComponent },
      { path: 'rango-zoom', component: PaginaRangoZoomComponent },
      { path: 'marcadores', component: PaginaMarcadoresComponent },
      { path: 'propiedades', component: PaginaPropiedadesComponent },
      { path: '**', redirectTo: 'pantalla-completa' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
