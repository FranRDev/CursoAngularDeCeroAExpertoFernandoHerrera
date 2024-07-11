import { IsEmail, IsString, MinLength } from "class-validator";

export class UsuarioRegistroDto {

    @IsString()
    nombre: string;
    @IsEmail()
    correo: string;
    @MinLength(6)
    clave: string;

}
