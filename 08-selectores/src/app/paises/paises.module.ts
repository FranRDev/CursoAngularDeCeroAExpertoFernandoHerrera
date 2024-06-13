import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PaginaSelectoresComponent } from './pages/selectores/selectores.component';
import { PaisesRoutingModule } from './paises-routing.module';

@NgModule({
  declarations: [
    PaginaSelectoresComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PaisesModule { }
