import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PaginaBasicaComponent } from './pages/basica/basica.component';
import { PaginaNumerosComponent } from './pages/numeros/numeros.component';
import { PaginaPedidoComponent } from './pages/pedido/pedido.component';
import { PaginaPocoComunComponent } from './pages/poco-comun/poco-comun.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductosRoutingModule } from './productos-routing.module';
import { PuedeVolarPipe } from './pipes/puede-volar.pipe';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';


@NgModule({
  declarations: [
    PaginaBasicaComponent,
    PaginaNumerosComponent,
    PaginaPedidoComponent,
    PaginaPocoComunComponent,
    PuedeVolarPipe,
    ToggleCasePipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
