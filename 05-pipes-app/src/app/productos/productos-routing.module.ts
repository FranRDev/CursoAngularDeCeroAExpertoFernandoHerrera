import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaBasicaComponent } from './pages/basica/basica.component';
import { PaginaNumerosComponent } from './pages/numeros/numeros.component';
import { PaginaPocoComunComponent } from './pages/poco-comun/poco-comun.component';

const routes: Routes = [
  { path: '', component: PaginaBasicaComponent },
  { path: 'numeros', component: PaginaNumerosComponent },
  { path: 'poco-comun', component: PaginaPocoComunComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
