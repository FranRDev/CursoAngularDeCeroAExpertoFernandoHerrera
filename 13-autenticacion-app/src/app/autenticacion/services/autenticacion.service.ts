import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environments';
import { Usuario } from '../interfaces';
import { EstadoAutenticacion } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private readonly urlBase: string = environment.urlBase;
  private clienteHttp = inject(HttpClient);
  private usuarioActual = signal<Usuario | null>(null);
  private estadoAutenticacion = signal<EstadoAutenticacion>(EstadoAutenticacion.comprobando);

  constructor() { }

  inicioSesion(correo: string, clave: string): Observable<boolean> {
    return of(true);
  }

}
