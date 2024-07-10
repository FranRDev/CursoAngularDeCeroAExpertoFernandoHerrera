import { IsEmail, MinLength } from "class-validator";

export class UsuarioIniciarSesionDto {

    @IsEmail()
    correo: string;
    @MinLength(6)
    clave: string;

}