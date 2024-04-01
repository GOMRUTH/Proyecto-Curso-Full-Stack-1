//console.log("El script se ha cargado correctamente.");

/*Productos - Agregar carrito y se dirige al Formulario de los producto que seleccionó*/
/*Lista de productos*/
let producto1 = {
    nombre: "producto 1",
    precio: 100,
    descripcion: "Descripción del producto",
    imagen: "img/Productos/photo_2024-03-24_21-51-37.jpg"
};
let producto2 = {
    nombre: "producto 2",
    precio: 100,
    descripcion: "Descripción del producto",
    imagen: "img/Productos/photo_2024-03-24_21-51-26.jpg"
};
let producto3 = {
    nombre: "producto 3",
    precio: 100,
    descripcion: "Descripción del producto",
    imagen: "img/Productos/9bd059a892e6655abbf32ae355e5b353.jpg"
};
let producto4 = {
    nombre: "producto 4",
    precio: 100,
    descripcion: "Descripción del producto",
    imagen: "img/Productos/1bcdd5606e7d636121d091bb702ac0b2.jpg"
};
let producto5 = {
    nombre: "producto 5",
    precio: 100,
    descripcion: "Descripción del producto",
    imagen: "img/Productos/461a82f486aaad86b9d65aa212f107db.jpg"
};
let producto6 = {
    nombre: "producto 6",
    precio: 100,
    descripcion: "Descripción del producto",
    imagen: "img/Productos/64c574bbbd77cc1451333f793d3fe25a.jpg"
};
let producto7 = {
    nombre: "producto 7",
    precio: 100,
    descripcion: "Descripción del producto",
    imagen: "img/Productos/7778393259587103e5f45ccf826cc860.jpg"
};
let producto8 = {
    nombre: "producto 8",
    precio: 100,
    descripcion: "Descripción del producto",
    imagen: "img/Productos/741bc23d9700d7d097bf554c00be1e59.jpg"
};
let producto9 = {
    nombre: "producto 9",
    precio: 100,
    descripcion: "Descripción del producto",
    imagen: "img/Productos/photo_2024-03-24_21-50-35.jpg"
};
let producto10 = {
    nombre: "producto 10",
    precio: 100,
    descripcion: "Descripción del producto",
    imagen: "img/Productos/4e455a48f061e2b5161d70612ac9b080.jpg"
};
let producto11 = {
    nombre: "producto 11",
    precio: 100,
    descripcion: "Descripción del producto",
    imagen: "img/Productos/4fd2c22d4fb69181334e03b4cc3d3a56.jpg"
};
let producto12 = {
    nombre: "producto 12",
    precio: 100,
    descripcion: "Descripción del producto",
    imagen: "img/Productos/66fdef09040ce827bec7fcca69b45591.jpg"
};
let producto13 = {
    nombre: "producto 13",
    precio: 100,
    descripcion: "Descripción del producto",
    imagen: "img/Productos/93fd9a33695aa3d68ba74f371e94c783.jpg"
};
let producto14 = {
    nombre: "producto 14",
    precio: 100,
    descripcion: "Descripción del producto",
    imagen: "img/Productos/5589a2b1e408c9894ebc7d2c6f21b9a4.jpg"
};
let producto15 = {
    nombre: "producto 15",
    precio: 100,
    descripcion: "Descripción del producto",
    imagen: "img/Productos/9250684287b27643701b5b78ac792a79.jpg"
};
let producto16 = {
    nombre: "producto 16",
    precio: 100,
    descripcion: "Descripción del producto",
    imagen: "img/Productos/photo_2024-03-24_21-50-32.jpg"
};

function agregarAlCarrito(producto) {
    // Guardar el producto en el carrito (aquí puedes usar cookies, localStorage, etc.)
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert('Producto agregado al carrito.');
}

/******************************************************************************************/
/*Formulario - Lista seleccionado de productos*/
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el carrito del almacenamiento local
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Obtener el elemento donde se mostrarán los productos en el carrito en el formulario
    let carritoContainer = document.getElementById('carrito-container');
    /*if(carritoContainer){

    }
    else{
        console.error('El contenedor del carrito no se encontro en el Dom.');
    }*/
    let listaProductos = document.getElementById('lista-productos');
    
    // Limpiar el contenido existente del contenedor del carrito
    carritoContainer.innerHTML = '';
    listaProductos.innerHTML= '';
    
    // Mostrar los productos en el carrito
    carrito.forEach(producto => {
        // Crear un elemento div para representar el producto en el carrito
        let productoDiv = document.createElement('div');
        productoDiv.classList.add('ProductoEnCarrito');
    
        // Crear elementos para mostrar los detalles del producto
        let nombreProducto = document.createElement('h4');
        nombreProducto.textContent = producto.nombre;
        let imagenProducto = document.createElement('img');
        imagenProducto.src = producto.imagen; // Ruta de la imagen del producto
        let descripcionProducto = document.createElement('p');
        descripcionProducto.textContent = producto.descripcion;
        let precioProducto = document.createElement('span');
        precioProducto.textContent = `$${producto.precio}`;
    
        // Agregar los elementos al div del producto en el carrito
        productoDiv.appendChild(imagenProducto);
        productoDiv.appendChild(nombreProducto);
        productoDiv.appendChild(descripcionProducto);
        productoDiv.appendChild(precioProducto);
    
        // Agregar el div del producto al contenedor del carrito en el formulario
        carritoContainer.appendChild(productoDiv);
        // Crear un elemento de lista para el producto
    let productoItem = document.createElement('li');
    
    // Construir el contenido del producto (puedes personalizarlo según tus necesidades)
    let productoContent = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div>
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <span>Precio: $${producto.precio}</span>
        </div>
    `;
    
    // Agregar el contenido al elemento de lista del producto
    productoItem.innerHTML = productoContent;
    
    // Agregar el elemento de lista del producto a la lista de productos
    listaProductos.appendChild(productoItem);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const formularioPedido = document.getElementById('formulario-pedido');

    formularioPedido.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada

        // Aquí puedes realizar cualquier validación adicional del formulario si es necesario

        alert('¡Pedido enviado con exito!'); // Muestra el mensaje 

        // Eliminar la información del carrito (eliminar la cookie en este caso)
        localStorage.removeItem('carrito');

        // Redirigir a la página de inicio o a otra página deseada después de enviar el pedido
        window.location.href = 'principal.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const formularioPedido = document.getElementById('formulario-consulta');

    formularioPedido.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada

        // Aquí puedes realizar cualquier validación adicional del formulario si es necesario

        alert('¡Tu consulta fue enviado con exito!'); // Muestra el mensaje 

        // Redirigir a la página de inicio o a otra página deseada después de enviar el pedido
        window.location.href = 'principal.html';
    });
});

/********************************************************************************************/
/*Principal - Funcion Carrusel en las imagenes*/
const carrusel = document.querySelector('.carrusel');
/*if(carrusel){

}
else{
    console.error('El elemento carusel no se encontro en el Dom.');
}*/
const imagenes = document.querySelectorAll('.carrusel img');

/*let contador = 0;

function cambiarImagen() {
    contador++;
    if (contador >= imagenes.length) {
        contador = 0;
    }
    carrusel.style.transform = `translateX(-${contador * 100}%)`;
}
// Cambia la imagen cada 3 segundos (ajusta según lo deseado)
setInterval(cambiarImagen, 3000);*/

/********************************************************************************************/
/*Todavia falta Modificar algunas cosas, ya que lleva tiempo de ver lo que esta fallando*/ 
//A partir de aca...
/*******************************************************************************************/
/*Detalles de Producto*/
/*const productos = [
    { 
        id: 1, 
        nombre: "producto 1", 
        descripcion: "Descripción del Producto", 
        precio: 100, 
        imagen: "img/Productos/photo_2024-03-24_21-51-37.jpg" },
    { 
        id: 2, 
        nombre: "producto 2", 
        descripcion: "Descripción del Producto", 
        precio: 100, 
        imagen: "img/Productos/photo_2024-03-24_21-51-26.jpg" },
    { 
        id: 4, 
        nombre: "producto 4", 
        descripcion: "Descripción del Producto", 
        precio: 100, 
        imagen: "img/Productos/1bcdd5606e7d636121d091bb702ac0b2.jpg" },
    { 
        id: 3, 
        nombre: "producto 3", 
        descripcion: "Descripción del Producto", 
        precio: 100, 
        imagen: "img/Productos/9bd059a892e6655abbf32ae355e5b353.jpg" },
    { 
        id: 5, 
        nombre: "producto 5", 
        descripcion: "Descripción del Producto", 
        precio: 100, 
        imagen: "img/Productos/461a82f486aaad86b9d65aa212f107db.jpg" },
    { 
        id: 6, 
        nombre: "producto 6", 
        descripcion: "Descripción del Producto", 
        precio: 100, 
        imagen: "img/Productos/64c574bbbd77cc1451333f793d3fe25a.jpg" },
    { 
        id: 7, 
        nombre: "producto 7", 
        descripcion: "Descripción del Producto", 
        precio: 100, 
        imagen: "img/Productos/7778393259587103e5f45ccf826cc860.jpg" },
    { 
        id: 8, 
        nombre: "producto 8", 
        descripcion: "Descripción del Producto", 
        precio: 100, 
        imagen: "img/Productos/741bc23d9700d7d097bf554c00be1e59.jpg" },
    { 
        id: 9, 
        nombre: "producto 9", 
        descripcion: "Descripción del Producto", 
        precio: 100, 
        imagen: "img/Productos/photo_2024-03-24_21-50-35.jpg" },
    { 
        id: 10, 
        nombre: "producto 10", 
        descripcion: "Descripción del Producto", 
        precio: 100, 
        imagen: "img/Productos/4e455a48f061e2b5161d70612ac9b080.jpg" },
    { 
        id: 11, 
        nombre: "producto 11", 
        descripcion: "Descripción del Producto", 
        precio: 100, 
        imagen: "img/Productos/4fd2c22d4fb69181334e03b4cc3d3a56.jpg" },
    { 
        id: 12, 
        nombre: "producto 12", 
        descripcion: "Descripción del Producto", 
        precio: 100, 
        imagen: "img/Productos/66fdef09040ce827bec7fcca69b45591.jpg" },
    { 
        id: 13, 
        nombre: "producto 13", 
        descripcion: "Descripción del Producto", 
        precio: 100, 
        imagen: "img/Productos/93fd9a33695aa3d68ba74f371e94c783.jpg" },
    { 
        id: 14, 
        nombre: "producto 14", 
        descripcion: "Descripción del Producto", 
        precio: 100, 
        imagen: "img/Productos/5589a2b1e408c9894ebc7d2c6f21b9a4.jpg" },
    { 
        id: 15, 
        nombre: "producto 15", 
        descripcion: "Descripción del Producto", 
        precio: 100, 
        imagen: "img/Productos/9250684287b27643701b5b78ac792a79.jpg" },
    { 
        id: 16, 
        nombre: "producto 16", 
        descripcion: "Descripción del Producto", 
        precio: 100, 
        imagen: "img/Productos/photo_2024-03-24_21-50-32.jpg" },
    // Agrega más productos según sea necesario
];

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el ID del producto de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    // Aquí puedes obtener los detalles del producto correspondiente usando el ID
    const producto = obtenerProductoPorId(productId);
    
    if (producto) {
        mostrarDetallesDelProducto(producto);
    } else {
        console.error('No se encontró el producto con el ID especificado.');
    }
});

// Función para obtener los detalles del producto por su ID (puedes implementarla según tu estructura de datos)
function obtenerProductoPorId(productId) {
    return productos.find(producto => producto.id === parseInt(productId));
}

function mostrarDetallesDelProducto(producto) {
    const productoDetails = document.getElementById('producto-details');
    productoDetails.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p>Precio: $${producto.precio}</p>
        <button onclick="agregarAlCarrito(${JSON.stringify(producto)})"">Agregar al Carrito</button>
    `;
}
*/