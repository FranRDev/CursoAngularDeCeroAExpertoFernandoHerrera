import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { AuthService } from './auth.service';
import { UsuarioActualizacionDto } from './dto/usuario-actualizacion.dto';
import { UsuarioCreacionDto } from './dto/usuario-creacion.dto';
import { UsuarioIniciarSesionDto } from './dto/usuario-inicio-sesion.dto';

@Controller('usuarios')
export class AuthController {
  constructor(private readonly servicioAutenticacion: AuthService) { }

  @Post()
  crear(@Body() dto: UsuarioCreacionDto) {
    return this.servicioAutenticacion.crear(dto);
  }

  @Post('/inicio-sesion')
  iniciarSesion(@Body() dto: UsuarioIniciarSesionDto) {
    return this.servicioAutenticacion.iniciarSesion(dto);
  }

  @Get()
  findAll() {
    return this.servicioAutenticacion.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicioAutenticacion.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UsuarioActualizacionDto) {
    return this.servicioAutenticacion.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicioAutenticacion.remove(+id);
  }
}
