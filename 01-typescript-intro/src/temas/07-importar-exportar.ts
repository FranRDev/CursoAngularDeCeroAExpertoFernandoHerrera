import { Producto, calcularImpuesto } from './06-desestructuracion-funciones'

const carritoCompra: Producto[] = [
    {
        descripcion: 'Nokia',
        precio: 100
    },
    {
        descripcion: 'iPad',
        precio: 150
    }
];

const [total, impuestoTotal] = calcularImpuesto({ productos: carritoCompra, impuesto: 0.15});

console.log('Total', total);
console.log('Impuesto', impuestoTotal);