import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ValidadorCorreo implements AsyncValidator {

  constructor() { }

  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    const correo = control.value;

    const llamadaHttp = new Observable<ValidationErrors | null>((suscriptor) => {
      console.log({ correo });
      if (correo === 'fran@r.dev') { suscriptor.next({ correoObtenido: true }) } else { suscriptor.next(null); }
      suscriptor.complete();
    }).pipe(delay(3000));

    return llamadaHttp;
  }

  // validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
  //   const correo = control.value;
  //   console.log({ correo });
  //   return of({ correoObtenido: true }).pipe(delay(2000));
  // }

}
