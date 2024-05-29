import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
  nombre: 'RTX 5090',
  precio: 2500,
  existencias: 6
}

@Component({ templateUrl: './basicos.component.html' })
export class PaginaBasicosComponent implements OnInit {

  // public formulario: FormGroup = new FormGroup({
  //   nombre: new FormControl(''),
  //   precio: new FormControl(0),
  //   existencias: new FormControl(0)
  // });

  public formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.required, Validators.min(0)]],
    existencias: [0, [Validators.required, Validators.min(0)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.formulario.reset(rtx5090);
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

  guardar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    console.log(this.formulario.value);
    this.formulario.reset({ precio: 0, existencias: 0 });
  }

}
