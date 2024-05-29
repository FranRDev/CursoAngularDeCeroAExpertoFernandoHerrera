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

  guardar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    console.log(this.formulario.value);
    this.formulario.reset();
  }

}
