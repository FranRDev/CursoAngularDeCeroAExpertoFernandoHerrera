import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel } from '@angular/forms';

@Component({ templateUrl: './basicos.component.html' })
export class PaginaBasicosComponent {

  // public formulario: FormGroup = new FormGroup({
  //   nombre: new FormControl(''),
  //   precio: new FormControl(0),
  //   existencias: new FormControl(0)
  // });

  public formulario: FormGroup = this.fb.group({
    nombre: [''],
    precio: [0],
    existencias: [0]
  });

  constructor(private fb: FormBuilder) { }

  guardar(): void {
    console.log(this.formulario.value);
  }

}
