import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({ templateUrl: './dinamicos.component.html' })
export class PaginaDinamicosComponent {

  public formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    juegosFavoritos: this.fb.array([
      ['Pang', Validators.required],
      ['Pacman', Validators.required]
    ])
  });

  constructor(private fb: FormBuilder) { }

  get juegosFavoritos() {
    return this.formulario.get('juegosFavoritos') as FormArray;
  }

  esCampoValido(campo: string): boolean | null {
    return this.formulario.controls[campo].errors && this.formulario.controls[campo].touched;
  }

  obtenerErrorCampo(campo: string): string | null {
    if (!this.formulario.controls[campo]) { return null; }

    const errores = this.formulario.controls[campo].errors || {};

    for (const error of Object.keys(errores)) {
      switch (error) {
        case 'required':
          return 'Este campo es obligatorio';

        case 'minlength':
          return `Se requieren mínimo ${errores['minlength'].requiredLength} caracteres`;
      }
    }

    return null;
  }

  esCampoArrayValido(array: FormArray, indice: number): boolean | null {
    return array.controls[indice].errors && array.controls[indice].touched;
  }

  eliminarFavorito(indice: number): void {
    this.juegosFavoritos.removeAt(indice);
  }

  guardar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    console.log(this.formulario.value);
    this.formulario.reset();
  }

}
