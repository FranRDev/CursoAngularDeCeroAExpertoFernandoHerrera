import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { PaginaProductoComponent } from './pages/producto/producto.component';
import { PrecioComponent } from './components/precio/precio.component';

@NgModule({
  declarations: [
    PaginaProductoComponent,
    PrecioComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
