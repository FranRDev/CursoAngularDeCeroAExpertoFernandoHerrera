import { CanActivateFn } from '@angular/router';

export const autenticadoGuard: CanActivateFn = (route, state) => {
  console.log('autenticadoGuard');
  console.log({ route, state });
  return true;
};
