import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PaginaMapaComponent } from './pages/mapa/mapa.component';
import { VistaMapaComponent } from './components/vista-mapa/vista-mapa.component';
import { CargaComponent } from './components/carga/carga.component';
import { BotonMiLocalizacionComponent } from './components/boton-mi-localizacion/boton-mi-localizacion.component';
import { LogoAngularComponent } from './components/logo-angular/logo-angular.component';

@NgModule({
  declarations: [PaginaMapaComponent, VistaMapaComponent, CargaComponent, BotonMiLocalizacionComponent, LogoAngularComponent],
  imports: [CommonModule],
  exports: [PaginaMapaComponent]
})
export class MapasModule { }
