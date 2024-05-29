import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactivosRoutingModule } from './reactivos-routing.module';
import { PaginaBasicaComponent } from './pages/basicos/basicos.component';
import { DinamicaComponent } from './pages/dinamicos/dinamicos.component';
import { InterruptoresComponent } from './pages/interruptores/interruptores.component';


@NgModule({
  declarations: [
    PaginaBasicaComponent,
    DinamicaComponent,
    InterruptoresComponent
  ],
  imports: [
    CommonModule,
    ReactivosRoutingModule
  ]
})
export class ReactivosModule { }
