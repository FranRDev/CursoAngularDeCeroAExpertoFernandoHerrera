import { Component, inject, OnInit, signal } from '@angular/core';
import { ServicioUsuariosService as UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../interfaces/usuario-respuesta.interface';

@Component({
  templateUrl: './info-usuario.component.html',
  styleUrl: './info-usuario.component.css'
})
export class PaginaInfoUsuarioComponent implements OnInit {

  private servicioUsuarios = inject(UsuariosService);
  public idUsuario = signal(1);
  public usuarioActual = signal<Usuario | undefined>(undefined);
  public usuarioEncontrado = signal(true);

  ngOnInit(): void {
    this.cargarUsuario(this.idUsuario());
  }

  cargarUsuario(id: number) {
    if (id < 1) { return; }
    this.usuarioActual.set(undefined);
    this.idUsuario.set(id);
    this.servicioUsuarios.obtenerUsuarioPorId(id).subscribe(u => this.usuarioActual.set(u));
  }

}
