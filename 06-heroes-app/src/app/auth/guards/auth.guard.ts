import { ActivatedRouteSnapshot, CanActivate, CanMatch, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanMatch, CanActivate {

  constructor(
    private servicioAutenticacion: AuthService,
    private enrutador: Router
  ) { }

  private comprobarAutenticacion(): Observable<boolean> {
    return this.servicioAutenticacion.comprobarAutenticacion().pipe(
      tap(autenticado => {
        if(!autenticado) { this.enrutador.navigate(['./auth/inicio-sesion'])}
      })
    );
  }

  canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    return this.comprobarAutenticacion();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.comprobarAutenticacion();
  }

}
