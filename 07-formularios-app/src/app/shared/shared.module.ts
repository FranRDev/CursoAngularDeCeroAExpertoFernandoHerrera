import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';

@NgModule({
  declarations: [
    MenuLateralComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuLateralComponent
  ]
})
export class SharedModule { }
