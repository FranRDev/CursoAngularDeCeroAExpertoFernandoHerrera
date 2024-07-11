import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'autenticacion', loadChildren: () => import('./autenticacion/autenticacion.module').then(m => m.AutenticacionModule) },
  { path: 'panel', loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule) },
  { path: '**', redirectTo: 'autenticacion' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
