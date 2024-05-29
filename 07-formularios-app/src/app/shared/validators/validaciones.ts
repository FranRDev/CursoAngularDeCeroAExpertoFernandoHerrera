import { FormControl, ValidationErrors } from "@angular/forms";

export const patronNombreYApellido: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const patronCorreo: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const puedeSerFranRDev = (control: FormControl): ValidationErrors | null => {
  const valor: string = control.value.trim().toLowerCase();
  if (valor === 'franrdev') { return { noFranRDev: true } }
  return null;
}
