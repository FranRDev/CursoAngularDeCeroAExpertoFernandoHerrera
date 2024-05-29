import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidacionesService {

  public patronNombreYApellido: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public patronCorreo: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  puedeSerFranRDev = (control: FormControl): ValidationErrors | null => {
    const valor: string = control.value.trim().toLowerCase();
    if (valor === 'franrdev') { return { noFranRDev: true } }
    return null;
  }

  esCampoValido(formulario: FormGroup, campo: string): boolean | null {
    return formulario.controls[campo].errors && formulario.controls[campo].touched;
  }

}
