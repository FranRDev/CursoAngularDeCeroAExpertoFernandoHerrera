import { Component, computed, inject } from '@angular/core';
import { AutenticacionService } from '../../../autenticacion/services/autenticacion.service';

@Component({
  templateUrl: './panel-layout.component.html',
  styleUrl: './panel-layout.component.css'
})
export class PanelLayoutComponent {

  private servicioAutenticacion = inject(AutenticacionService);

  public usuario = computed(() => this.servicioAutenticacion.usuarioActual());

}
