import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import * as bcrypt from 'bcryptjs';
import { Model } from 'mongoose';

import { Usuario } from './entities/usuario.entity';
import { UsuarioActualizacionDto } from './dto/usuario-actualizacion.dto';
import { UsuarioCreacionDto } from './dto/usuario-creacion.dto';

@Injectable()
export class AuthService {

  constructor(@InjectModel(Usuario.name) private modeloUsuario: Model<Usuario>) { }

  async create(dto: UsuarioCreacionDto): Promise<Usuario> {
    try {
      const { clave, ...datosUsuario } = dto;
      const nuevoUsuario = new this.modeloUsuario({ clave: bcrypt.hashSync(clave, 10), ...datosUsuario });
      await nuevoUsuario.save();
      const { clave: _, ...usuario } = nuevoUsuario.toJSON();
      return usuario;

    } catch (error) {
      if (error.code === 11000) { throw new BadRequestException(`${dto.correo} ya existe`); }
      throw new InternalServerErrorException('¡Sucedió algo terrible!');
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UsuarioActualizacionDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

}
