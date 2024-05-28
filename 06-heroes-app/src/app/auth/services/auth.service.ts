import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { environments } from '../../../environments/environments';
import { User } from '../interfaces/usuario.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private urlBase = environments.urlBase;
  private usuario?: User;

  constructor(private clienteHttp: HttpClient) { }

  get usuarioActual(): User | undefined {
    if (!this.usuario) { return undefined; }
    return structuredClone(this.usuario);
  }

  inicioSesion(correo: string, clave: string): Observable<User> {
    return this.clienteHttp.get<User>(`${this.urlBase}/users/1`)
      .pipe(
        tap(usuario => this.usuario = usuario),
        tap(usuario => localStorage.setItem('token', 'srgrgrah.teahthath.dztajtj'))
      );
  }

  comprobarAutenticacion(): Observable<boolean> {
    if (!localStorage.getItem('token')) { return of(false); }
    const token = localStorage.getItem('token');

    return this.clienteHttp.get<User>(`${this.urlBase}/users/1`)
      .pipe(
        tap(usuario => this.usuario = usuario),
        map(usuario => !!usuario),
        catchError(_ => of(false))
      );
  }

  cerrarSesion(): void {
    this.usuario = undefined;
    localStorage.clear();
  }

}
