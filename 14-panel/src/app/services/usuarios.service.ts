import { Injectable, signal } from '@angular/core';

import { Usuario } from '@interfaces/respuesta.interface';

interface Estado {
  usuarios: Usuario[];
  cargando: boolean;
}

@Injectable({ providedIn: 'root' })
export class UsuariosService {

  #estado = signal<Estado>({ usuarios: [], cargando: true });

  constructor() {
    console.log('Cargando datos');
  }

}
