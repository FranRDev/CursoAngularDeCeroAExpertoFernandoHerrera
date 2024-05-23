import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { RouterModule } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AcercaDeComponent,
    InicioComponent,
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
    InicioComponent
  ]
})
export class SharedModule { }
