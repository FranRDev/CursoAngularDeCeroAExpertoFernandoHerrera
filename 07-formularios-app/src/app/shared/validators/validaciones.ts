import { FormControl } from "@angular/forms";

export const puedeSerFranRDev = (control: FormControl) => {
  const valor: string = control.value.trim().toLowerCase();
  if (valor === 'franrdev') { return { noFranRDev: true } }
  return null;
}
