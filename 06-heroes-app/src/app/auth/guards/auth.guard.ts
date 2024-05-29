import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

// @Injectable({providedIn: 'root'})
// export class AuthGuard implements CanMatch, CanActivate {

//   constructor(
//     private servicioAutenticacion: AuthService,
//     private enrutador: Router
//   ) { }

//   private comprobarAutenticacion(): Observable<boolean> {
//     return this.servicioAutenticacion.comprobarAutenticacion().pipe(
//       tap(autenticado => {
//         if(!autenticado) { this.enrutador.navigate(['./auth/inicio-sesion'])}
//       })
//     );
//   }

//   canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
//     return this.comprobarAutenticacion();
//   }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
//     return this.comprobarAutenticacion();
//   }

// }

function comprobarAutenticacion(): Observable<boolean> {
  const servicioAutenticacion: AuthService = inject(AuthService);
  const enrutador: Router = inject(Router);

  return servicioAutenticacion.comprobarAutenticacion().pipe(
    tap(autenticado => {
      if(!autenticado) { enrutador.navigate(['./auth/inicio-sesion'])}
    })
  );
}

export const authCanActivate: CanMatchFn = () => comprobarAutenticacion();

export const authCanMatch: CanMatchFn = () => comprobarAutenticacion();
