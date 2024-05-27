import { Component } from '@angular/core';

@Component({
  selector: 'pagina-poco-comun',
  templateUrl: './poco-comun.component.html',
  styleUrl: './poco-comun.component.css'
})
export class PaginaPocoComunComponent {

  // i18n Select
  public nombre: string = 'Fernando';
  public genero: 'masculino' | 'femenino' = 'masculino';
  public mapaInvitacion = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  }

  public cambiarCliente(): void {
    this.nombre = 'Raquel';
    this.genero = 'femenino';
  }

}
