import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as Validadores from '../../../shared/validators/validaciones';
import { patronCorreo } from '../../../shared/validators/validaciones';

@Component({ templateUrl: './registro.component.html' })
export class PaginaRegistroComponent {

  public formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(Validadores.patronNombreYApellido)]],
    correo: ['', [Validators.required, Validators.pattern(Validadores.patronCorreo)]],
    usuario: ['', [Validators.required, Validadores.puedeSerFranRDev]],
    clave: ['', [Validators.required]],
    claveRepetida: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  esCampoValido(campo: string) {
    // TODO: Obtener de servicio
  }

  guardar(): void {
    this.formulario.markAllAsTouched();
  }

}
