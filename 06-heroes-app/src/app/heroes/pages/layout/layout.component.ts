import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/usuario.interface';
import { Router } from '@angular/router';

@Component({ selector: 'pagina-layout', templateUrl: './layout.component.html' })
export class PaginaLayoutComponent {

  public elementosMenu = [
    { etiqueta: 'Listado', icono: 'label', url: './lista' },
    { etiqueta: 'Añadir', icono: 'add', url: './anhadir' },
    { etiqueta: 'Buscar', icono: 'search', url: './busqueda' }
  ];

  constructor(
    private servicioAutenticacion: AuthService,
    private enrutador: Router
  ) { }

  get usuario(): User | undefined {
    return this.servicioAutenticacion.usuarioActual;
  }

  cerrarSesion(): void {
    this.servicioAutenticacion.cerrarSesion();
    this.enrutador.navigate(['/auth/login']);
  }

}
