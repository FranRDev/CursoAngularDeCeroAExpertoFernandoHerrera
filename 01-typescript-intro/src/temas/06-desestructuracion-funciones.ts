interface Producto {
    descripcion: string,
    precio: number;
}

const telefono: Producto = {
    descripcion: 'Nokia A1',
    precio: 150.0
}

const tablet: Producto = {
    descripcion: 'iPad Air',
    precio: 250.0
}

interface OpcionesCalculoImpuesto {
    impuesto: number;
    productos: Producto[];
}

function calcularImpuesto(opciones: OpcionesCalculoImpuesto): number[] {
    let total = 0;

    opciones.productos.forEach(producto => {
        total += producto.precio;
    });

    return [total, total * opciones.impuesto];
}

const carritoCompra = [telefono, tablet];
const impuesto = 0.15;
const resultado = calcularImpuesto({
    productos: carritoCompra,
    impuesto
});

console.log('Total: ', resultado[0]);
console.log('Impuesto: ', resultado[1]);

export {};