import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({ templateUrl: './registro.component.html' })
export class PaginaRegistroComponent {

  public formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    correo: ['', [Validators.required]],
    usuario: ['', [Validators.required]],
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
