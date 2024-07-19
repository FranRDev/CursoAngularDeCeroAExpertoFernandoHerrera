import { Component, inject } from '@angular/core';

import { UsuariosService } from '@services/usuarios.service';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
  styles: ``
})
export default class UsuariosComponent {

  public servicioUsuarios = inject(UsuariosService)

}
