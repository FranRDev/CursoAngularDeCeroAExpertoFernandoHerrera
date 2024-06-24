import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ElementoMenu {
  nombre: string;
  ruta: string;
}

@Component({
  selector: 'menu-lateral',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent {

  public elementosMenu: ElementoMenu[] = [
    { ruta: '/mapas/pantalla-completa', nombre: 'Pantalla completa' },
    { ruta: '/mapas/rango-zoom', nombre: 'Rango - Zoom' },
    { ruta: '/mapas/marcadores', nombre: 'Marcadores' },
    { ruta: '/mapas/propiedades', nombre: 'Propiedades' },
    { ruta: '/solo', nombre: 'Solo' },
  ];

}
