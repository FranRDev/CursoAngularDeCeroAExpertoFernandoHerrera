import { Usuario } from "./usuario.interface";

export interface RespuestaInicioSesion {
  usuario: Usuario;
  token: string;
}
