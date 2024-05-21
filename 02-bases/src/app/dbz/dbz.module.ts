import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pages/pagina-principal.component';
import { ListaComponent } from './components/lista/lista.component';
import { AnhadirPersonajeComponent } from './components/anhadir-personaje/anhadir-personaje.component';

@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    ListaComponent,
    AnhadirPersonajeComponent
  ],
  exports: [
    PaginaPrincipalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
