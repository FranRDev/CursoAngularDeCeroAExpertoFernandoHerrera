import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { ImagenPerezosaComponent } from './components/imagen-perezosa/imagen-perezosa.component';

@NgModule({
  declarations: [
    BarraLateralComponent,
    ImagenPerezosaComponent
  ],
  exports: [
    BarraLateralComponent,
    ImagenPerezosaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
