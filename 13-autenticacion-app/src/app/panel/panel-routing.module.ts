import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PanelLayoutComponent } from './layouts/panel-layout/panel-layout.component';

const routes: Routes = [{ path: '', component: PanelLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
