import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

// @Injectable({providedIn: 'root'})
// export class PublicoGuard implements CanMatch, CanActivate {

//   constructor(
//     private servicioAutenticacion: AuthService,
//     private enrutador: Router
//   ) { }

//   private comprobarAutenticacion(): Observable<boolean> {
//     return this.servicioAutenticacion.comprobarAutenticacion().pipe(
//       tap(autenticado => {
//         if(autenticado) { this.enrutador.navigate(['./'])}
//       }),
//       map(autenticado => !autenticado)
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
        if(autenticado) { enrutador.navigate(['./'])}
      }),
      map(autenticado => !autenticado)
    );
  }

  export const publicoCanActivate: CanMatchFn = () => comprobarAutenticacion();

  export const publicoCanMatch: CanMatchFn = () => comprobarAutenticacion();
