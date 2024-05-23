import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaAcercaDeComponent } from './shared/pages/acerca-de/acerca-de.component';
import { PaginaContactoComponent } from './shared/pages/contacto/contacto.component';
import { PaginaInicioComponent } from './shared/pages/inicio/inicio.component';

const rutas: Routes = [
  { path: '', component: PaginaInicioComponent },
  { path: 'acerca-de', component: PaginaAcercaDeComponent },
  { path: 'contacto', component: PaginaContactoComponent },
  { path: 'paises', loadChildren: () => import('./paises/paises.module').then( m => m.PaisesModule) },
  { path: '**', redirectTo: '' }
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
