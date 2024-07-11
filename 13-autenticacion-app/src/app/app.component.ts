import { Component, computed, effect, inject } from '@angular/core';
import { AutenticacionService } from './autenticacion/services/autenticacion.service';
import { EstadoAutenticacion } from './autenticacion/enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  private servicioAutenticacion = inject(AutenticacionService);
  private enrutador = inject(Router);

  public comprobacionAutenticacionFinalizada = computed<boolean>(() => {
    if (this.servicioAutenticacion.estadoAutenticacion() === EstadoAutenticacion.comprobando) { return false; }
    return true;
  });

  public efectoCambioEstadoAutenticacion = effect(() => {
    switch (this.servicioAutenticacion.estadoAutenticacion()) {
      case EstadoAutenticacion.comprobando:
        return;

      case EstadoAutenticacion.autenticado:
        this.enrutador.navigateByUrl('/panel');
        return;

      case EstadoAutenticacion.noAutenticado:
        this.enrutador.navigateByUrl('/autenticacion/inicio-sesion');
        return;
    }
  });

}
