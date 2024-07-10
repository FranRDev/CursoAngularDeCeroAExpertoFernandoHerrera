import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EsquemaUsuario, Usuario } from './entities/usuario.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: Usuario.name, schema: EsquemaUsuario}])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
