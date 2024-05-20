export interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Francisco'
}

const pasajero2: Pasajero = {
    nombre: 'Pedro',
    hijos: ['Raúl', 'Lola']
}

const obtenerNumeroHijos = (pasajero: Pasajero): number => {
    const cuantosHijos = pasajero.hijos?.length || 0;
    // const cuantosHijos = pasajero.hijos!.length;
    console.log(pasajero.nombre, cuantosHijos);
    return cuantosHijos;
}

obtenerNumeroHijos(pasajero1);
obtenerNumeroHijos(pasajero2);