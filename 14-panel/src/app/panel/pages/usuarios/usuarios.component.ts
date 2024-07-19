import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsuariosService } from '@services/usuarios.service';
import { TituloComponent } from '@shared/titulo/titulo.component';

@Component({
  standalone: true,
  imports: [TituloComponent, RouterModule],
  templateUrl: './usuarios.component.html',
  styles: ``
})
export default class UsuariosComponent {

  public servicioUsuarios = inject(UsuariosService)

}
