import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtiquetaPersonalizadaDirective } from './directivas/etiqueta-personalizada.directive';

@NgModule({
  declarations: [
    EtiquetaPersonalizadaDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EtiquetaPersonalizadaDirective
  ]
})
export class SharedModule { }
