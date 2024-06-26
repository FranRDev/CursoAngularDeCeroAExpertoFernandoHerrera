function anhadirNumeros(a: number, b: number): number {
    return a + b;
}

const anhadirNumerosFlecha = (a: number, b: number): string => `${a + b}`;

function multiplicar(primerNumero: number, segundoNumero?: number, base: number = 2) {
    return primerNumero * base;
}

// const resultado: number = anhadirNumeros(1, 2);
// const resultado2: string = anhadirNumerosFlecha(1, 2);
// const resultadoMultiplicacion: number = multiplicar(5);
//console.log({resultado, resultado2, resultadoMultiplicacion});

interface Personaje {
    nombre: string;
    pv: number;
    mostrarPv: () => void;
}

const sanarPersonaje = (personaje: Personaje, cantidad: number) => {
    personaje.pv += cantidad;
};

const aragorn: Personaje = {
    nombre: 'Aragorn',
    pv: 50,
    mostrarPv() {
        console.log(`Puntos de vida ${this.pv}`);
    }
}

sanarPersonaje(aragorn, 10);

aragorn.mostrarPv();

export {};