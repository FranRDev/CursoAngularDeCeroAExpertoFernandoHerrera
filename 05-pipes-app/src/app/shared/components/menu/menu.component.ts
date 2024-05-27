import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {

  public elementosMenu: MenuItem[] = [];

  ngOnInit(): void {
    this.elementosMenu = [
      { label: 'Nuevo', icon: 'pi pi-fw pi-plus' },
      { label: 'Abrir', icon: 'pi pi-fw pi-download' },
      { label: 'Deshacer', icon: 'pi pi-fw pi-refresh' }
    ]
  }

}
