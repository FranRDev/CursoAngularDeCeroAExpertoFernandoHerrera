import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaInicioComponent } from './pages/inicio/inicio.component';
import { PaginaAcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { RouterModule } from '@angular/router';
import { PaginaContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    PaginaAcercaDeComponent,
    PaginaInicioComponent,
    BarraLateralComponent,
    PaginaContactoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PaginaAcercaDeComponent,
    BarraLateralComponent,
    PaginaContactoComponent,
    PaginaInicioComponent
  ]
})
export class SharedModule { }
