import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

import { delay, map } from 'rxjs';

import type { RespuestaUsuario, RespuestaUsuarios, Usuario } from '@interfaces/respuesta.interface';

interface Estado {
  usuarios: Usuario[];
  cargando: boolean;
}

@Injectable({ providedIn: 'root' })
export class UsuariosService {

  private clienteHttp = inject(HttpClient);
  #estado = signal<Estado>({ usuarios: [], cargando: true });
  usuarios = computed(() => this.#estado().usuarios);
  cargando = computed(() => this.#estado().cargando);

  constructor() {
    this.clienteHttp.get<RespuestaUsuarios>('https://reqres.in/api/users')
      .pipe(delay(1500))
      .subscribe(respuesta => {
        this.#estado.set({ usuarios: respuesta.data, cargando: false });
      });
  }

  obtenerUsuarioPorId(id: string) {
    return this.clienteHttp.get<RespuestaUsuario>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1500),
        map(respuesta => respuesta.data)
      );
  }

}
