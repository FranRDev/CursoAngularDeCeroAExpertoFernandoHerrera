const nombre: string = 'Aragorn';
let puntosVida: number | 'FULL' = 95;
const estaVivo: boolean = true;

puntosVida = 'FULL';

console.log({nombre, puntosHp: puntosVida, estaVivo});

export {};