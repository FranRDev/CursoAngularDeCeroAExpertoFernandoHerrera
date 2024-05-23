import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcercaDeComponent } from './shared/pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './shared/pages/contacto/contacto.component';
import { InicioComponent } from './shared/pages/inicio/inicio.component';

const rutas: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'acerca-de',
    component: AcercaDeComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: '**',
    redirectTo: ''
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
