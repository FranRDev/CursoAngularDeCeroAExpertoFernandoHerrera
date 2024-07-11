import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { AuthService } from '../auth.service';

@Injectable()
export class AutorizacionGuard implements CanActivate {

  constructor(
    private servicioJwt: JwtService,
    private servicioUsuarios: AuthService
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const solicitud = context.switchToHttp().getRequest();
    const token = this.extraerTokenDesdeCabecera(solicitud);
    if (!token) { throw new UnauthorizedException('No hay token'); }

    try {
      const carga = await this.servicioJwt.verifyAsync<JwtPayload>(token, { secret: process.env.JWT_SECRETO });
      const usuario = await this.servicioUsuarios.buscarUsuarioPorId(carga.id);
      if (!usuario) { throw new UnauthorizedException('El usuario no existe'); }
      if (!usuario.activo) { throw new UnauthorizedException('El usuario no está activo'); }
      solicitud['usuario'] = usuario;

    } catch (error) {
      throw new UnauthorizedException();
    }

    return Promise.resolve(true);
  }

  private extraerTokenDesdeCabecera(request: Request): string | undefined {
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

}