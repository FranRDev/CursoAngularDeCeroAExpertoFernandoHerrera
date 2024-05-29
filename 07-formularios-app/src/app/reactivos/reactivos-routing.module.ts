import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaBasicosComponent } from './pages/basicos/basicos.component';
import { PaginaDinamicosComponent } from './pages/dinamicos/dinamicos.component';
import { PaginaInterruptoresComponent } from './pages/interruptores/interruptores.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basicos', component: PaginaBasicosComponent },
      { path: 'dinamicos', component: PaginaDinamicosComponent },
      { path: 'interruptores', component: PaginaInterruptoresComponent },
      { path: '**', redirectTo: 'basicos' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactivosRoutingModule { }
