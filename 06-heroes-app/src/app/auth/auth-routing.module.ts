import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const rutas: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
