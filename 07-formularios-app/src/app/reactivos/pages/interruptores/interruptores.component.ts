import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({ templateUrl: './interruptores.component.html' })
export class PaginaInterruptoresComponent implements OnInit {

  public formulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    terminosYCondiciones: [false, Validators.requiredTrue]
  });

  public persona = {
    genero: 'F',
    notificaciones: false
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formulario.reset(this.persona);
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

    const { terminosYCondiciones, ...nuevaPersona } = this.formulario.value;
    console.log(nuevaPersona);
    this.persona = nuevaPersona;
  }

}
