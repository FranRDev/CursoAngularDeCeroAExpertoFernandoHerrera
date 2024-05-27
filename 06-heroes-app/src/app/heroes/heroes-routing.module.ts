import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaLayoutComponent } from './pages/layout/layout.component';
import { PaginaAnhadirComponent } from './pages/anhadir/anhadir.component';

const routes: Routes = [
  {
    path: '',
    component: PaginaLayoutComponent,
    children: [
      { path: 'anhadir', component: PaginaAnhadirComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
