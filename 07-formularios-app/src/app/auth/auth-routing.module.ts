import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaRegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'registro', component: PaginaRegistroComponent },
      { path: '**', redirectTo: 'registro' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
