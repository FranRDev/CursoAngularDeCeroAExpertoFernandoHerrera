import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { map, Observable, tap } from 'rxjs';

import { Usuario, UsuarioRespuesta } from '../interfaces/usuario-respuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuariosService {

  private urlBase = 'https://reqres.in/api/users';
  private clienteHttp = inject(HttpClient);

  obtenerUsuarioPorId(id: number): Observable<Usuario> {
    return this.clienteHttp.get<UsuarioRespuesta>(`${this.urlBase}/${id}`).pipe(map(r => r.usuario), tap(console.log));
  }

}
