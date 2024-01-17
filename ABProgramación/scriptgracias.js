document.addEventListener('DOMContentLoaded', function () {
    const resumenBody = document.getElementById('resumen-body');
    const resumenCompra = localStorage.getItem('resumenCompra');

    if (resumenBody && resumenCompra) {
        resumenBody.innerHTML = resumenCompra;
    } else {
        resumenBody.innerHTML = '<tr><td colspan="4">No hay elementos en el carrito</td></tr>';
    }

    localStorage.removeItem('resumenCompra');
});


function mostrarPrecioTotal() {
    const elementosCarrito = document.querySelectorAll('#lista-carrito tbody tr');
    let precioTotal = 0;

    elementosCarrito.forEach((elemento) => {
        const precioString = elemento.querySelector('td:nth-child(3)').textContent;
        const precio = parseFloat(precioString.replace('$', '').replace(',', '')) || 0;
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

