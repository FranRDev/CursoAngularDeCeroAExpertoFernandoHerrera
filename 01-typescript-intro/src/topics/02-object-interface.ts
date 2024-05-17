const habilidades: string[] = ['Bash', 'Counter', 'Healting'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const Aragorn: Personaje = {
    nombre: 'Aragorn',
    hp: 100,
    habilidades: ['Bash', 'Counter']
};

Aragorn.puebloNatal = 'Rivendell';

console.table(Aragorn);

export {};