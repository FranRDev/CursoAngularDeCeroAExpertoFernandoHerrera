import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaPaisComponent } from './pages/pais/pais.component';
import { PaginaPorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PaginaPorPaisComponent } from './pages/por-pais/por-pais.component';
import { PaginaPorRegionComponent } from './pages/por-region/por-region.component';

const rutas: Routes = [
  { path: 'por-capital', component: PaginaPorCapitalComponent },
  { path: 'por-pais', component: PaginaPorPaisComponent },
  { path: 'por-region', component: PaginaPorRegionComponent },
  { path: 'por/:id', component: PaginaPaisComponent },
  { path: '**', redirectTo: 'por-capital' }
]

@NgModule({
  imports: [
    RouterModule.forChild(rutas)
  ],
  exports: []
})
export class PaisesRoutingModule { }
