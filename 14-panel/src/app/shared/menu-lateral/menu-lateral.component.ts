import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from '../../app.routes';

@Component({
  selector: 'menu-lateral',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent {

  public elementosMenu = routes
    .map(ruta => ruta.children ?? [])
    .flat()
    .filter(ruta => ruta && ruta.path)
    .filter(ruta => !ruta.path?.includes(':'));

  // constructor() {
  //   const rutas = routes
  //     .map(ruta => ruta.children ?? [])
  //     .flat()
  //     .filter(ruta => ruta && ruta.path)
  //     .filter(ruta => !ruta.path?.includes(':'));
  // }

}
