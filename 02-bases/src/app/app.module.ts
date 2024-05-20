import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListaComponent } from './heroes/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroeComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
