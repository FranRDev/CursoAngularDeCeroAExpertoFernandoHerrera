import { Usuario } from "../entities/usuario.entity";

export interface InicioSesionRespuesta {
    usuario: Usuario;
    token: string;
}