import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PaginaBasicosComponent } from './pages/basicos/basicos.component';
import { PaginaDinamicosComponent } from './pages/dinamicos/dinamicos.component';
import { PaginaInterruptoresComponent } from './pages/interruptores/interruptores.component';
import { ReactivosRoutingModule } from './reactivos-routing.module';


@NgModule({
  declarations: [
    PaginaBasicosComponent,
    PaginaDinamicosComponent,
    PaginaInterruptoresComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactivosRoutingModule
  ]
})
export class ReactivosModule { }
