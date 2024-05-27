import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { PaginaBasicaComponent } from './pages/basica/basica.component';
import { PaginaNumerosComponent } from './pages/numeros/numeros.component';
import { PaginaPocoComunComponent } from './pages/poco-comun/poco-comun.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PaginaPedidoComponent } from './pages/pedido/pedido.component';


@NgModule({
  declarations: [
    PaginaBasicaComponent,
    PaginaNumerosComponent,
    PaginaPocoComunComponent,
    PaginaPedidoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    PrimeNgModule
  ]
})
export class ProductosModule { }
