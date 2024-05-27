import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PaginaLayoutComponent } from "./pages/layout/layout.component";
import { PaginaInicioSesionComponent } from "./pages/inicio-sesion/inicio-sesion.component";
import { PaginaRegistroComponent } from "./pages/registro/registro.component";

const routes: Routes = [
  {
    path: '',
    component: PaginaLayoutComponent,
    children: [
      { path: 'inicio-sesion', component: PaginaInicioSesionComponent },
      { path: 'registro', component: PaginaRegistroComponent },
      { path: '**', redirectTo: 'inicio-sesion' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
