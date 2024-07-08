import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PaginaProductoComponent } from './pages/producto/producto.component';
import { PrductosRoutingModule } from './productos-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PaginaProductoComponent
  ],
  imports: [
    CommonModule,
    PrductosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PrductosModule { }
