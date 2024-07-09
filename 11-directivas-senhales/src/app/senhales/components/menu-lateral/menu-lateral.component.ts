import { Component, signal } from '@angular/core';

interface ElementoMenu {
  titulo: string,
  ruta: string
}

@Component({
  selector: 'menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent {

  public elementosMenu = signal<ElementoMenu[]>([
    { titulo: 'Contador', ruta: 'contador' },
    { titulo: 'Info Usuario', ruta: 'info-usuario' },
    { titulo: 'Propiedades', ruta: 'propiedades' }
  ]);

  // public elementosMenu: ElementoMenu[] = [
  //   { titulo: 'Contador', ruta: 'contador' },
  //   { titulo: 'Info Usuario', ruta: 'info-usuario' },
  //   { titulo: 'Propiedades', ruta: 'propiedades' },
  // ]

}
