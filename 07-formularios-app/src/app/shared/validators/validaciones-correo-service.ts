import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ValidacionesCorreo implements AsyncValidator {

  constructor() { }

  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    const correo = control.value;
    console.log({ correo });
    return of({ correoObtenido: true }).pipe(delay(2000));
  }

}
