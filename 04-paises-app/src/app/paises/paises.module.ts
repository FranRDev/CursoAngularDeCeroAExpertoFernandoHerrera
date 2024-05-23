import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PaginaPaisComponent } from './pages/pais/pais.component';
import { PaginaPorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PaginaPorPaisComponent } from './pages/por-pais/por-pais.component';
import { PaginaPorRegionComponent } from './pages/por-region/por-region.component';
import { PaisesRoutingModule } from './paises-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TablaPaisesComponent } from './components/tabla/tabla.component';

@NgModule({
  declarations: [
    PaginaPaisComponent,
    PaginaPorCapitalComponent,
    PaginaPorPaisComponent,
    PaginaPorRegionComponent,
    TablaPaisesComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    SharedModule
  ]
})
export class PaisesModule { }
