import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

import { map, Observable, of, tap } from 'rxjs';

import { environment } from '../../../environments/environments';
import { EstadoAutenticacion } from '../enums';
import { RespuestaInicioSesion, Usuario } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private readonly urlBase: string = environment.urlBase;
  private clienteHttp = inject(HttpClient);
  private _usuarioActual = signal<Usuario | null>(null);
  private _estadoAutenticacion = signal<EstadoAutenticacion>(EstadoAutenticacion.comprobando);

  public usuarioActual = computed(() => this._usuarioActual());
  public estadoAutenticacion = computed(() => this._estadoAutenticacion);

  constructor() { }

  inicioSesion(correo: string, clave: string): Observable<boolean> {
    const url = `${this.urlBase}/usuarios/inicio-sesion`;
    const cuerpo = { correo, clave };
    return this.clienteHttp.post<RespuestaInicioSesion>(url, cuerpo)
      .pipe(
        tap(({ usuario, token }) => {
          this._usuarioActual.set(usuario);
          this._estadoAutenticacion.set(EstadoAutenticacion.autenticado);
          localStorage.setItem('token', token);
          console.log({ usuario, token });
        }),
        map(() => true)

        // TODO: Errores
      );
  }

}
