import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidacionesService } from '../../../shared/services/validaciones.service';

@Component({ templateUrl: './registro.component.html' })
export class PaginaRegistroComponent {

  public formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.servicioValidaciones.patronNombreYApellido)]],
    correo: ['', [Validators.required, Validators.pattern(this.servicioValidaciones.patronCorreo)]],
    usuario: ['', [Validators.required, this.servicioValidaciones.puedeSerFranRDev]],
    clave: ['', [Validators.required]],
    claveRepetida: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private servicioValidaciones: ValidacionesService
  ) { }

  esCampoValido(campo: string) {
    return this.servicioValidaciones.esCampoValido(this.formulario, campo);
  }

  guardar(): void {
    this.formulario.markAllAsTouched();
  }

}
