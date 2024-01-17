document.addEventListener('DOMContentLoaded', function () {
    // Inicializar Swiper y cargar eventos
    var swiper = new Swiper(".mySwiper-1", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    var swiper2 = new Swiper(".mySwiper-2", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints : {
            0: {
                slidesPerView: 1
            },
            520: {
                slidesPerView: 2
            },
            950:{
                slidesPerView: 3
            }
        }
    });

    // Carrito
    const carrito = document.getElementById('carrito');
    const elementos1 = document.getElementById('lista-1');
    const elementos2 = document.getElementById('lista-2');
    const elementos3 = document.getElementById('lista-3');
    const lista = document.querySelector('#lista-carrito tbody');
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
    const comprarCarritoBtn = document.getElementById('comprar-carrito');

    cargarEventListeners();

    function cargarEventListeners(){
        elementos1.addEventListener('click', comprarElemento);
        elementos2.addEventListener('click', comprarElemento);
        elementos3.addEventListener('click', comprarElemento);
        carrito.addEventListener('click', eliminarElemento);
        vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

        if (comprarCarritoBtn) {
            comprarCarritoBtn.addEventListener('click', comprarCarrito);
        }
    }

    function comprarCarrito(e) {
        e.preventDefault();
        const resumenCompra = obtenerResumenCompra();

        // Almacenar resumen en el almacenamiento local (puedes usar cookies o Local Storage)
        localStorage.setItem('resumenCompra', resumenCompra);

        // Redirigir a la página de agradecimiento
        window.location.href = 'gracias.html';
    }

    function obtenerResumenCompra() {
        // Obtener información de los elementos en el carrito
        const elementosCarrito = document.querySelectorAll('#lista-carrito tbody tr');
        let resumen = '';

        elementosCarrito.forEach((elemento) => {
            const imagen = elemento.querySelector('td:nth-child(1) img').src;
            const nombre = elemento.querySelector('td:nth-child(2)').textContent;
            const precio = elemento.querySelector('td:nth-child(3)').textContent;
            resumen += `<tr>
            <td><img src="${imagen}" alt="${nombre}" width="50"></td>
            <td>${nombre}</td>
            <td>${precio}</td>
        </tr>`;
        });

        return resumen;
    }

    function comprarElemento(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')) {
            const elemento = e.target.parentElement.parentElement;
            leerDatosElemento(elemento);
        }
    }

    function leerDatosElemento(elemento){
        const infoElemento = {
            imagen: elemento.querySelector('img').src,
            titulo: elemento.querySelector('h3').textContent,
            precio: elemento.querySelector('.precio').textContent,
            id: elemento.querySelector('a').getAttribute('data-id')
        }

        insertarCarrito(infoElemento);
    }

    function insertarCarrito(elemento){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td> 
                <img src="${elemento.imagen}" width=100 >
            </td>
    
            <td>
                ${elemento.titulo}
            </td>
            <td>
                ${elemento.precio}
            </td>
            <td>
                <a href="" class="borrar" data-id="${elemento.id}">X</a>
            </td>
        `;
    
        lista.appendChild(row);
    }

    function eliminarElemento(e){
        e.preventDefault();
        let elemento,
            elementoId;
    
            if(e.target.classList.contains('borrar')){
                e.target.parentElement.parentElement.remove();
                elemento = e.target.parentElement.parentElement;
                elementoId = elemento.querySelector('a').getAttribute('data-id');
            }
    }

    function vaciarCarrito(){
        while(lista.firstChild){
            lista.removeChild(lista.firstChild);
        }
        return false;
    }
});
