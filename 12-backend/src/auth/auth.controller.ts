import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AutorizacionGuard } from './guards/autorizacion.guard';
import { UsuarioActualizacionDto } from './dto/usuario-actualizacion.dto';
import { UsuarioCreacionDto } from './dto/usuario-creacion.dto';
import { UsuarioIniciarSesionDto } from './dto/usuario-inicio-sesion.dto';
import { UsuarioRegistroDto } from './dto/usuario-registro.dto';
import { Usuario } from './entities/usuario.entity';
import { InicioSesionRespuesta } from './interfaces/inicio-sesion-respuesta.interface';

@Controller('usuarios')
export class AuthController {

  constructor(private readonly servicioUsuarios: AuthService) { }

  @Post()
  crear(@Body() dto: UsuarioCreacionDto) {
    return this.servicioUsuarios.crear(dto);
  }

  @Post('/inicio-sesion')
  iniciarSesion(@Body() dto: UsuarioIniciarSesionDto) {
    return this.servicioUsuarios.iniciarSesion(dto);
  }

  @Post('/registro')
  registro(@Body() dto: UsuarioRegistroDto) {
    return this.servicioUsuarios.registro(dto);
  }

  @Get()
  @UseGuards(AutorizacionGuard)
  buscarTodo() { // @Request() solicitud: Request
    return this.servicioUsuarios.buscarTodo();
  }

  @Get('/comprobar-token')
  @UseGuards(AutorizacionGuard)
  async comprobarToken(@Request() solicitud: Request): Promise<InicioSesionRespuesta> {
    const usuario = solicitud['usuario'] as Usuario;
    return { usuario: usuario, token: await this.servicioUsuarios.obtenerJwt({ id: usuario._id }) }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.servicioAutenticacion.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UsuarioActualizacionDto) {
  //   return this.servicioAutenticacion.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.servicioAutenticacion.remove(+id);
  // }

}