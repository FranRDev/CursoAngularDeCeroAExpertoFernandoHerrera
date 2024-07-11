import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class PaginaInicioSesionComponent {

  private fb = inject(FormBuilder);

  public formulario: FormGroup = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required, Validators.minLength(6)]]
  });

  inicioSesion() {
    console.log(this.formulario.value)
  }

}
