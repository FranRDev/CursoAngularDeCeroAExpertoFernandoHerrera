const habilidades: string[] = ['Bash', 'Counter', 'Healting'];

interface Personaje {
    nombre: string;
    pv: number;
    habilidades: string[];
    puebloNatal?: string;
}

const aragorn: Personaje = {
    nombre: 'Aragorn',
    pv: 100,
    habilidades: ['Bash', 'Counter']
};

aragorn.puebloNatal = 'Rivendell';

console.table(aragorn);

export {};