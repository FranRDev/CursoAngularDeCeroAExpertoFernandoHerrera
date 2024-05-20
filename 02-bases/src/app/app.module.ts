import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListaComponent } from './heroes/lista/lista.component';
import { ContadorModule } from './contador/componentes/contador.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
