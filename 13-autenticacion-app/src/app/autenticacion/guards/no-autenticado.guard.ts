import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { AutenticacionService } from '../services/autenticacion.service';
import { EstadoAutenticacion } from '../enums';

export const noAutenticadoGuard: CanActivateFn = (route, state) => {
  const servicioAutenticacion = inject(AutenticacionService);
  const enrutador = inject(Router);

  if (servicioAutenticacion.estadoAutenticacion() === EstadoAutenticacion.autenticado) {
    enrutador.navigateByUrl('/panel')
    return false;
  }

  return true;
};
