import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AcercaDeComponent,
    InicioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AcercaDeComponent,
    InicioComponent
  ]
})
export class SharedModule { }
