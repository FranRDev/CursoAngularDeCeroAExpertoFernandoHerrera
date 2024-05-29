import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({ templateUrl: './basicos.component.html' })
export class PaginaBasicosComponent {

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

  guardar(): void {
    if (this.formulario.invalid) { return; }
    console.log(this.formulario.value);
  }

}
