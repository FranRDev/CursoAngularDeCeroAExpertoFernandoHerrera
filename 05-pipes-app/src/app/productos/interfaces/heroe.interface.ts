export enum Color {
  rojo, negro, azul, verde
}

export interface Heroe {
  nombre: string;
  puedeVolar: boolean;
  color: Color;
}
