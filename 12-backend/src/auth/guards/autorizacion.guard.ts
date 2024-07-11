import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AutorizacionGuard implements CanActivate {

  constructor(private servicioJwt: JwtService) { }

  canActivate(context: ExecutionContext): Promise<boolean> {
    const solicitud = context.switchToHttp().getRequest();
    const token = this.extraerTokenDesdeCabecera(solicitud);
    console.log({ token });
    return Promise.resolve(true);
  }

  private extraerTokenDesdeCabecera(request: Request): string | undefined {
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

}