import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { autenticadoGuard, noAutenticadoGuard } from './autenticacion/guards';

const routes: Routes = [
  { path: 'autenticacion', canActivate: [noAutenticadoGuard], loadChildren: () => import('./autenticacion/autenticacion.module').then(m => m.AutenticacionModule) },
  { path: 'panel', canActivate: [autenticadoGuard], loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule) },
  { path: '**', redirectTo: 'autenticacion' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
