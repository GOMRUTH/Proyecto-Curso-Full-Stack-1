const express = require('express');
const router = express.Router();

const productosMonos = [
    { id: 1, nombre: 'Colita Moño Rosa', descripcion: 'Cantidad: x2', precio: 1000, imagen: '/img/productos/photo_2024-03-24_21-51-37.jpg' },
    { id: 2, nombre: 'Colita Moño Azul', descripcion: 'Cantidad: x2', precio: 1500, imagen: '/img/productos/photo_2024-03-24_21-51-26.jpg' },
    { id: 3, nombre: 'Colita Moño Coquette', descripcion: 'Cantidad: x Unid.', precio: 900, imagen: '/img/productos/9bd059a892e6655abbf32ae355e5b353.jpg' },
    { id: 4, nombre: 'Colitas Moños Blanco y Azul', descripcion: 'Combo completo', precio: 1800, imagen: '/img/productos/1bcdd5606e7d636121d091bb702ac0b2.jpg' },
    { id: 5, nombre: 'Moño Coquette Azul y Blanco', descripcion: 'Cantidad: x Unid.', precio: 1500, imagen: '/img/productos/461a82f486aaad86b9d65aa212f107db.jpg' },
    { id: 6, nombre: 'Moño Coquette Blanco y Celeste', descripcion: 'Cantidad: x2', precio: 1800, imagen: '/img/productos/64c574bbbd77cc1451333f793d3fe25a.jpg' },
    { id: 7, nombre: 'Vincha Moños', descripcion: 'Cantidad: x3', precio: 2000, imagen: '/img/productos/7778393259587103e5f45ccf826cc860.jpg' },
    { id: 8, nombre: 'Moño Coquette', descripcion: 'Cantidad: x Unid.', precio: 1300, imagen: '/img/productos/741bc23d9700d7d097bf554c00be1e59.jpg' }
];

const productosMunecas = [
    { id: 9, nombre: 'Almohada Vaquita', descripcion: 'Cantidad: x Unid.', precio: 1600, imagen: '/img/productos/photo_2024-03-24_21-50-35.jpg' },
    { id: 10, nombre: 'Muñeca Piernas largas', descripcion: 'Cantidad: x Unid.', precio: 1800, imagen: '/img/productos/4e455a48f061e2b5161d70612ac9b080.jpg' },
    { id: 11, nombre: 'Almohada Gatito', descripcion: 'Cantidad: x Unid.', precio: 1500, imagen: '/img/productos/4fd2c22d4fb69181334e03b4cc3d3a56.jpg' },
    { id: 12, nombre: 'Muñeca Coqueta', descripcion: 'Cantidad: x Unid.', precio: 1000, imagen: '/img/productos/66fdef09040ce827bec7fcca69b45591.jpg' },
    { id: 13, nombre: 'Muñeca Gatita', descripcion: 'Cantidad: x Unid.', precio: 1100, imagen: '/img/productos/93fd9a33695aa3d68ba74f371e94c783.jpg' },
    { id: 14, nombre: 'Muñeca Duende Blanco', descripcion: 'Cantidad: x Unid.', precio: 1300, imagen: '/img/productos/5589a2b1e408c9894ebc7d2c6f21b9a4.jpg' },
    { id: 15, nombre: 'Muñeco Monito Celeste', descripcion: 'Cantidad: x Unid.', precio: 1400, imagen: '/img/productos/9250684287b27643701b5b78ac792a79.jpg' },
    { id: 16, nombre: 'Combo Almohada + Muñeca', descripcion: 'sin descripción', precio: 1700, imagen: '/img/productos/photo_2024-03-24_21-50-32.jpg' }
];

router.get('/productos', (req, res) => {
    res.render('productos', { productosMonos, productosMunecas });
});

module.exports = router;
