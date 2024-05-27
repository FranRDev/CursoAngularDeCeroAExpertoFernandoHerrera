import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { PaginaInicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { PaginaLayoutComponent } from './pages/layout/layout.component';
import { PaginaRegistroComponent } from './pages/registro/registro.component';

@NgModule({
  declarations: [
    PaginaLayoutComponent,
    PaginaInicioSesionComponent,
    PaginaRegistroComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    MaterialModule
  ]
})
export class AuthModule { }
