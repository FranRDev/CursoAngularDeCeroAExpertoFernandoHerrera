export function cualEsMiTipo<T>(argumento: T): T {
    return argumento;
}

let soyUnString = cualEsMiTipo<string>('Hola Mundo');
let soyUnNumero = cualEsMiTipo<number>(100);
let soyUnArray = cualEsMiTipo<number[]>([1,2,3,4,5]);

console.log(soyUnString.split(' '));
console.log(soyUnNumero.toFixed());
console.log(soyUnArray.join('-'));