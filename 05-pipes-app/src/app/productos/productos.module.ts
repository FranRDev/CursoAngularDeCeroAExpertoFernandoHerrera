import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { PaginaBasicaComponent } from './pages/basica/basica.component';
import { PaginaNumerosComponent } from './pages/numeros/numeros.component';
import { PaginaPocoComunComponent } from './pages/poco-comun/poco-comun.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PaginaPedidoComponent } from './pages/pedido/pedido.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';


@NgModule({
  declarations: [
    PaginaBasicaComponent,
    PaginaNumerosComponent,
    PaginaPocoComunComponent,
    PaginaPedidoComponent,
    ToggleCasePipe
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    PrimeNgModule
  ]
})
export class ProductosModule { }
