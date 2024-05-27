import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PaginaLayoutComponent } from "./pages/layout/layout.component";

const rutas: Routes = [
  {path: '', component: PaginaLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
