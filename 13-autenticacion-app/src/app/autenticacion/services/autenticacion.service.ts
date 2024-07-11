import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

import { catchError, map, Observable, of, tap, throwError } from 'rxjs';

import { environment } from '../../../environments/environments';
import { EstadoAutenticacion } from '../enums';
import { RespuestaComprobarToken, RespuestaInicioSesion, Usuario } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private readonly urlBase: string = environment.urlBase;
  private clienteHttp = inject(HttpClient);
  private _usuarioActual = signal<Usuario | null>(null);
  private _estadoAutenticacion = signal<EstadoAutenticacion>(EstadoAutenticacion.comprobando);

  public usuarioActual = computed(() => this._usuarioActual());
  public estadoAutenticacion = computed(() => this._estadoAutenticacion());

  constructor() { }

  private establecerAutenticacion(usuario: Usuario, token: string): boolean {
    this._usuarioActual.set(usuario);
    this._estadoAutenticacion.set(EstadoAutenticacion.autenticado);
    localStorage.setItem('token', token);
    return true;
  }

  inicioSesion(correo: string, clave: string): Observable<boolean> {
    const url = `${this.urlBase}/usuarios/inicio-sesion`;
    const cuerpo = { correo, clave };
    return this.clienteHttp.post<RespuestaInicioSesion>(url, cuerpo)
      .pipe(
        map(({ usuario, token }) => this.establecerAutenticacion(usuario, token)),
        catchError(error => throwError(() => error.error.message))
      );
  }

  comprobarEstadoAutenticacion(): Observable<boolean> {
    const url = `${this.urlBase}/usuarios/comprobar-token`;
    const token = localStorage.getItem('token');
    if (!token) { return of(false); }
    const cabeceras = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.clienteHttp.get<RespuestaComprobarToken>(url, { headers: cabeceras })
      .pipe(
        map(({ usuario, token }) => this.establecerAutenticacion(usuario, token)),
        catchError(() => {
          this._estadoAutenticacion.set(EstadoAutenticacion.noAutenticado);
          return of(false);
        })
      );
  }

}
