import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs';

import { UsuariosService } from '@services/usuarios.service';
import { TituloComponent } from '@shared/titulo/titulo.component';

@Component({
  standalone: true,
  imports: [TituloComponent],
  template: `
    <titulo titulo="Usuario" />

    @if (usuario()) {
      <section>
        <img [srcset]="usuario()!.avatar" [alt]="usuario()!.first_name" />

        <div>
          <h3>{{ usuario()!.first_name }} {{ usuario()!.last_name }}</h3>
          <p>{{ usuario()?.email }}</p>
        </div>
      </section>

    } @else {
      <p>Cargando información</p>
    }
  `
})
export default class UsuarioComponent {

  private ruta = inject(ActivatedRoute);
  private servicioUsuario = inject(UsuariosService);

  // public usuario = signal<Usuario | undefined>(undefined);

  public usuario = toSignal(
    this.ruta.params.pipe(
      switchMap(({ id }) => this.servicioUsuario.obtenerUsuarioPorId(id))
    )
  )

  // constructor() {
  //   this.ruta.params.subscribe(parametros => {
  //     console.log({ parametros });
  //   })
  // }

}
