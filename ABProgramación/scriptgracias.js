document.addEventListener('DOMContentLoaded', function () {
    // Recuperar y mostrar el resumen de la compra desde el almacenamiento local
    const resumenBody = document.getElementById('resumen-body');
    const resumenCompra = localStorage.getItem('resumenCompra');

    if (resumenBody && resumenCompra) {
        // Mostrar el resumen de la compra en la tabla
        resumenBody.innerHTML = resumenCompra;
    } else {
        // Manejar el caso en el que no haya resumen de compra
        resumenBody.innerHTML = '<tr><td colspan="4">No hay elementos en el carrito</td></tr>';
    }

    // Limpiar el almacenamiento local después de mostrar el resumen
    localStorage.removeItem('resumenCompra');
});


function mostrarPrecioTotal() {
    const elementosCarrito = document.querySelectorAll('#lista-carrito tbody tr');
    let precioTotal = 0;

    elementosCarrito.forEach((elemento) => {
        const precioString = elemento.querySelector('td:nth-child(3)').textContent;
        const precio = parseFloat(precioString.replace('$', '').replace(',', '')) || 0; // Añadí replace para manejar comas en los precios
        precioTotal += precio;
    });

    return precioTotal.toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
    const precioTotal = mostrarPrecioTotal();
    const precioTotalElement = document.getElementById('precio-total');
    if (precioTotalElement) {
        precioTotalElement.textContent = `€${(precioTotal / 100).toFixed(2)}`;
    }
});

function mostrarPrecioTotal() {
    const elementosResumen = document.querySelectorAll('#resumen-body tr');
    let precioTotal = 0;

    elementosResumen.forEach((elemento) => {
        const precioString = elemento.querySelector('td:nth-child(3)').textContent;
        const precio = parseFloat(precioString.replace('€', '').replace(',', '')) || 0;
        precioTotal += precio;
    });

    return precioTotal;
}

