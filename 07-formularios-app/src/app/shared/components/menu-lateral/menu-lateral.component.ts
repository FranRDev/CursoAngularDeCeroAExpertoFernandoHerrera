import { Component } from '@angular/core';

interface ElementoMenu {
  titulo: string;
  ruta: string;
}

@Component({ selector: 'shared-menu-lateral', templateUrl: './menu-lateral.component.html' })
export class MenuLateralComponent {

  public menuReactivos: ElementoMenu[] = [
    { titulo: 'Básicos', ruta: './reactivos/basicos'},
    { titulo: 'Dinámicos', ruta: './reactivos/dinamicos'},
    { titulo: 'Interruptores', ruta: './reactivos/interruptores'},
  ];

  public menuAuth: ElementoMenu[] = [
    { titulo: 'Registro', ruta: './auth/registro'},
  ];

}
