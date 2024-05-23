import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './shared/pages/inicio/inicio.component';
import { AcercaDeComponent } from './shared/pages/acerca-de/acerca-de.component';

const rutas: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'acerca-de',
    component: AcercaDeComponent
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
