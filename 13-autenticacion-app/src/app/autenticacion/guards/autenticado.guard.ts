import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';
import { EstadoAutenticacion } from '../enums';

export const autenticadoGuard: CanActivateFn = (route, state) => {
  const servicioAutenticacion = inject(AutenticacionService);
  if (servicioAutenticacion.estadoAutenticacion() === EstadoAutenticacion.autenticado) { return true; }
  if (servicioAutenticacion.estadoAutenticacion() === EstadoAutenticacion.comprobando) { return false; }
  const enrutador = inject(Router);
  // localStorage.setItem('url', state.url);
  enrutador.navigateByUrl('/autenticacion/inicio-sesion')
  return false;
};
