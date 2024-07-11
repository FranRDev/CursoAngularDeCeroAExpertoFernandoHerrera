import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PanelLayoutComponent } from './layouts/panel-layout/panel-layout.component';
import { PanelRoutingModule } from './panel-routing.module';

@NgModule({
  declarations: [
    PanelLayoutComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
