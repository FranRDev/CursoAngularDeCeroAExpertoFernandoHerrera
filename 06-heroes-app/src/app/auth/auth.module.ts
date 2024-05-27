import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { PaginaLayoutComponent } from './pages/layout/layout.component';
import { PaginaInicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { PaginaRegistroComponent } from './pages/registro/registro.component';

@NgModule({
  declarations: [
    PaginaLayoutComponent,
    PaginaInicioSesionComponent,
    PaginaRegistroComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule
  ]
})
export class AuthModule { }
