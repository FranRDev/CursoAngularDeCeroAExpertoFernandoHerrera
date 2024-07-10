import { IsEmail, IsString, MinLength } from "class-validator";

export class UsuarioCreacionDto {

    @IsString()
    nombre: string;
    @IsEmail()
    correo: string;
    @MinLength(6)
    clave: string;

}
