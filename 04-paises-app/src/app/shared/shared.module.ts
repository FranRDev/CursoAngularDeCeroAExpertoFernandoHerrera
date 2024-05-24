import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PaginaAcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { PaginaContactoComponent } from './pages/contacto/contacto.component';
import { PaginaInicioComponent } from './pages/inicio/inicio.component';
import { SpinnerCargaComponent } from './components/spinner-carga/spinner-carga.component';

@NgModule({
  declarations: [
    BarraLateralComponent,
    BuscadorComponent,
    PaginaAcercaDeComponent,
    PaginaContactoComponent,
    PaginaInicioComponent,
    SpinnerCargaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BarraLateralComponent,
    BuscadorComponent,
    PaginaAcercaDeComponent,
    PaginaContactoComponent,
    PaginaInicioComponent,
    SpinnerCargaComponent
  ]
})
export class SharedModule { }
