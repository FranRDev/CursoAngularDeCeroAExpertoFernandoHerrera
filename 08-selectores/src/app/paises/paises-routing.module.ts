import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaSelectoresComponent } from './pages/selectores/selectores.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'selectores', component: PaginaSelectoresComponent },
    { path: '**', redirectTo: 'selectores' }
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaisesRoutingModule { }
