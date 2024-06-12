import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PaginaSelectoresComponent } from './pages/selectores/selectores.component';
import { PaisesRoutingModule } from './paises-routing.module';

@NgModule({
  declarations: [
    PaginaSelectoresComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule
  ]
})
export class PaisesModule { }
