import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {

  public elementosMenu: MenuItem[] = [];

  ngOnInit(): void {
    this.elementosMenu = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          { label: 'Textos y flechas', icon: 'pi pi-align-left', routerLink: '/' },
          { label: 'Números', icon: 'pi pi-dollar', routerLink: 'numeros' },
          { label: 'No comunes', icon: 'pi pi-globe', routerLink: 'poco-comun' },
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          { label: 'Otro elemento', icon: 'pi pi-cog' },
        ]
      },
    ]
  }

}
