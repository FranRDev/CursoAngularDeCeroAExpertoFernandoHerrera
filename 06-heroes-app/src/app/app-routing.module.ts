import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { PaginaError404Component } from './shared/pages/error404/error404.component';
import { authCanActivate, authCanMatch } from './auth/guards/auth.guard';
import { publicoCanActivate, publicoCanMatch } from './auth/guards/publico.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canActivate: [publicoCanActivate], canMatch: [publicoCanMatch] },
  { path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule), canActivate: [authCanActivate], canMatch: [authCanMatch] },
  { path: '404', component: PaginaError404Component },
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
  { path: '**', redirectTo: '404', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
