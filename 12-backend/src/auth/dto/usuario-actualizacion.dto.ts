import { PartialType } from '@nestjs/mapped-types';

import { UsuarioCreacionDto } from './usuario-creacion.dto';

export class UsuarioActualizacionDto extends PartialType(UsuarioCreacionDto) {}
