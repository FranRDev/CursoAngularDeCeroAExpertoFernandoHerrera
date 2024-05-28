import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({ selector: 'pagina-inicio-sesion', templateUrl: './inicio-sesion.component.html' })
export class PaginaInicioSesionComponent {

  constructor(
    private servicioAutenticacion: AuthService,
    private enrutador: Router
  ) { }

  iniciarSesion(): void {
    this.servicioAutenticacion.inicioSesion('', '').subscribe(_ => this.enrutador.navigate(['/']));
  }

}
