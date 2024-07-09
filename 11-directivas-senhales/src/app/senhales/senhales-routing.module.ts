import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutSenhalesComponent } from './layout/layout-senhales/layout-senhales.component';
import { PaginaContadorComponent } from './pages/contador/contador.component';
import { PaginaInfoUsuarioComponent } from './pages/info-usuario/info-usuario.component';
import { PaginaPropiedadesComponent } from './pages/propiedades/propiedades.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutSenhalesComponent,
    children: [
      { path: 'contador', component: PaginaContadorComponent },
      { path: 'info-usuario', component: PaginaInfoUsuarioComponent },
      { path: 'propiedades', component: PaginaPropiedadesComponent },
      { path: '**', redirectTo: 'contador' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SenhalesRoutingModule { }
