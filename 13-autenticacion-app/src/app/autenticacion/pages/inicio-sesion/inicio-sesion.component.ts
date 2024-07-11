import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2'

import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class PaginaInicioSesionComponent {

  private fb = inject(FormBuilder);
  private servicioAutenticacion = inject(AutenticacionService);

  public formulario: FormGroup = this.fb.group({
    correo: ['fran@r.dev', [Validators.required, Validators.email]],
    clave: ['1234567', [Validators.required, Validators.minLength(6)]]
  });

  inicioSesion() {
    const { correo, clave } = this.formulario.value;
    this.servicioAutenticacion.inicioSesion(correo, clave)
      .subscribe({
        next: () => console.log('Todo bien'),
        error: (mensaje) => Swal.fire('Error', mensaje, 'error')
      });
  }

}
