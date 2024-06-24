import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'producto', component: PaginaProductoComponent },
    { path: '**', redirectTo: 'producto' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrductosRoutingModule { }
