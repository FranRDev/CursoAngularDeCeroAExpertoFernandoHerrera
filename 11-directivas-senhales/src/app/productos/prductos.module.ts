import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PaginaProductoComponent } from './pages/producto/producto.component';
import { PrductosRoutingModule } from './prductos-routing.module';


@NgModule({
  declarations: [
    PaginaProductoComponent
  ],
  imports: [
    CommonModule,
    PrductosRoutingModule
  ]
})
export class PrductosModule { }
