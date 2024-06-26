export interface Producto {
    descripcion: string,
    precio: number;
}

// const telefono: Producto = {
//     descripcion: 'Nokia A1',
//     precio: 150.0
// }

// const tablet: Producto = {
//     descripcion: 'iPad Air',
//     precio: 250.0
// }

interface OpcionesCalculoImpuesto {
    impuesto: number;
    productos: Producto[];
}

export function calcularImpuesto(opciones: OpcionesCalculoImpuesto): [number, number] {
    let total = 0;

    const { productos, impuesto } = opciones;

    productos.forEach(({precio}) => {
        total += precio;
    });

    return [total, total * impuesto];
}

// const carritoCompra = [telefono, tablet];
// const impuesto = 0.15;
// const [total, impuestoTotal] = calcularImpuesto({
//     productos: carritoCompra,
//     impuesto
// });

// console.log('Total: ', total);
// console.log('Impuesto: ', impuestoTotal);