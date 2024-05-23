import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaInicioComponent } from './pages/inicio/inicio.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { RouterModule } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AcercaDeComponent,
    PaginaInicioComponent,
    BarraLateralComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AcercaDeComponent,
    BarraLateralComponent,
    ContactoComponent,
    PaginaInicioComponent
  ]
})
export class SharedModule { }
