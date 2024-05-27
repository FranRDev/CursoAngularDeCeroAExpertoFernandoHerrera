import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaAnhadirComponent } from './pages/anhadir/anhadir.component';
import { PaginaBusquedaComponent } from './pages/busqueda/busqueda.component';
import { PaginaHeroeComponent } from './pages/heroe/heroe.component';
import { PaginaLayoutComponent } from './pages/layout/layout.component';
import { PaginaListaComponent } from './pages/lista/lista.component';

const routes: Routes = [
  {
    path: '',
    component: PaginaLayoutComponent,
    children: [
      { path: 'anhadir', component: PaginaAnhadirComponent },
      { path: 'busqueda', component: PaginaBusquedaComponent },
      { path: 'editar/:id', component: PaginaAnhadirComponent },
      { path: 'lista', component: PaginaListaComponent },
      { path: ':id', component: PaginaHeroeComponent },
      { path: '**', redirectTo: 'lista' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
