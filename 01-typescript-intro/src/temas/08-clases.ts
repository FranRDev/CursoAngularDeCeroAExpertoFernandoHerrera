export class Persona {

    // public nombre: string;
    // private direccion: string;

    constructor(
        public nombre: string,
        private direccion: string = 'Sin dirección'
    ) { }

}

const ironman = new Persona('Iron Man', 'Nueva York');
console.log(ironman);