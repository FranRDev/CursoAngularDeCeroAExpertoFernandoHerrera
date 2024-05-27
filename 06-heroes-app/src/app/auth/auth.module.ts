import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { PaginaLayoutComponent } from './pages/layout/layout.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './pages/registro/registro.component';

@NgModule({
  declarations: [
    PaginaLayoutComponent,
    InicioSesionComponent,
    RegistroComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule
  ]
})
export class AuthModule { }
