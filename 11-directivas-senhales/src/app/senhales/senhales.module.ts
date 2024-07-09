import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SenhalesRoutingModule } from './senhales-routing.module';
import { LayoutSenhalesComponent } from './layout/layout-senhales/layout-senhales.component';
import { PaginaContadorComponent } from './pages/contador/contador.component';
import { PaginaInfoUsuarioComponent } from './pages/info-usuario/info-usuario.component';
import { PaginaPropiedadesComponent } from './pages/propiedades/propiedades.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';


@NgModule({
  declarations: [
    LayoutSenhalesComponent,
    PaginaContadorComponent,
    PaginaInfoUsuarioComponent,
    PaginaPropiedadesComponent,
    MenuLateralComponent
  ],
  imports: [
    CommonModule,
    SenhalesRoutingModule
  ]
})
export class SenhalesModule { }
