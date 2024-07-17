import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuLateralComponent } from '../shared/menu-lateral/menu-lateral.component';

@Component({
  standalone: true,
  imports: [RouterModule, MenuLateralComponent],
  templateUrl: './panel.component.html',
  styles: ``
})
export default class PanelComponent {

}
