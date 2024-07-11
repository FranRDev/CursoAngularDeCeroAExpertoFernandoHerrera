import { Usuario } from "./usuario.interface";

export interface RespuestaComprobarToken {
  usuario: Usuario;
  token: string;
}
