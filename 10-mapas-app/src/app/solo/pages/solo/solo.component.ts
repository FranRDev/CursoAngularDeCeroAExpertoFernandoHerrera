import { Component } from '@angular/core';

import { ContadorComponent } from '../../components/contador/contador.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';

@Component({
  standalone: true,
  imports: [ContadorComponent, MenuLateralComponent],
  templateUrl: './solo.component.html',
  styleUrl: './solo.component.css'
})
export class PaginaSoloComponent {

}

