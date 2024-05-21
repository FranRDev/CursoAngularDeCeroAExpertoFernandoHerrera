import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pages/pagina-principal.component';

@NgModule({
  declarations: [
    PaginaPrincipalComponent
  ],
  exports: [
    PaginaPrincipalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
