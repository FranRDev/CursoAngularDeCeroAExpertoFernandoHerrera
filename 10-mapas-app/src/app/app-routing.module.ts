import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'mapas', loadChildren: () => import('./mapas/mapas.module').then(m => m.MapasModule) },
  { path: 'solo', loadComponent: () => import('./solo/pages/solo/solo.component').then(c => c.PaginaSoloComponent) },
  { path: '**', redirectTo: 'mapas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
