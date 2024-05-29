import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactivosRoutingModule } from './reactivos-routing.module';
import { PaginaBasicosComponent } from './pages/basicos/basicos.component';
import { PaginaDinamicosComponent } from './pages/dinamicos/dinamicos.component';
import { PaginaInterruptoresComponent } from './pages/interruptores/interruptores.component';


@NgModule({
  declarations: [
    PaginaBasicosComponent,
    PaginaDinamicosComponent,
    PaginaInterruptoresComponent
  ],
  imports: [
    CommonModule,
    ReactivosRoutingModule
  ]
})
export class ReactivosModule { }
