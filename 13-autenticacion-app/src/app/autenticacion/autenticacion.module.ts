import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AutenticacionLayoutComponent } from './layouts/autenticacion-layout/autenticacion-layout.component';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { PaginaInicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { PaginaRegistroComponent } from './pages/registro/registro.component';


@NgModule({
  declarations: [
    AutenticacionLayoutComponent,
    PaginaInicioSesionComponent,
    PaginaRegistroComponent
  ],
  imports: [
    AutenticacionRoutingModule,
    CommonModule
  ]
})
export class AutenticacionModule { }
