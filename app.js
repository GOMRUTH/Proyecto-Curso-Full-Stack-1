const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();

const app = express();

// Configurar la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

app.use((req, res, next) => {
    if(!req.session.cart){
        req.session.cart = [];
    }
    next();
})

// Configurar la conexión a PostgreSQL
const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'Ecommerce_MM(RG)',
    user: 'postgres',
    password: '9393'
});

// Datos de productos
let productosMonos = [];
let productosMunecas = [];
/*const productosMonos = [
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
];*/

// Rutas
app.get('/', (req, res) => {
    res.render('principal');
});

app.get('/productos', async (req, res) => {
    try {
        const productosMonos = await db.any("SELECT * FROM productos WHERE tipo = 'monos'");
        const productosMunecas = await db.any("SELECT * FROM productos WHERE tipo = 'munecas'");
        res.render('productos', { productosMonos, productosMunecas });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener los productos");
    }
});

app.get('/carritoDeCompra', (req, res) => {
    res.render('carritoDeCompra', { cart: req.session.cart });
});

app.get('/contacto', (req, res) => {
    res.render('contacto');
});

app.post('/add-to-cart', (req, res) => {
    const { productId } = req.body;
    db.one("SELECT * FROM productos WHERE id = $1", [productId])
        .then(product => {
            const cartItem = req.session.cart.find(item => item.id == productId);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                req.session.cart.push({ ...product, quantity: 1 });
            }
            res.redirect('/carritoDeCompra');
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Error al agregar el producto al carrito");
        });
});

app.post('/update-cart', (req, res) => {
    const { productId, quantity } = req.body;
    const cartItem = req.session.cart.find(item => item.id == productId);
    if (cartItem) {
        cartItem.quantity = parseInt(quantity, 10);
        if (cartItem.quantity <= 0) {
            req.session.cart = req.session.cart.filter(item => item.id != productId);
        }
    }
    res.redirect('/carritoDeCompra');
});

app.post('/remove-from-cart', (req, res) => {
    const { productId } = req.body;
    req.session.cart = req.session.cart.filter(item => item.id != productId);
    res.redirect('/carritoDeCompra');
});

app.post('/send-order', async (req, res) => {
    const cart = req.session.cart;
    if (cart.length === 0) {
        return res.send('El carrito está vacío.');
    }

    const total = cart.reduce((sum, item) => sum + (item.precio * item.quantity), 0);

    try {
        // Iniciar la transacción
        await db.tx(async t => {
            // Insertar el pedido en la tabla orders
            const order = await t.one(
                "INSERT INTO orders(total) VALUES($1) RETURNING id", [total]
            );

            // Insertar los detalles del pedido en la tabla order_items
            const queries = cart.map(item => {
                return t.none(
                    "INSERT INTO order_items(order_id, product_id, quantity, total) VALUES($1, $2, $3, $4)",
                    [order.id, item.id, item.quantity, item.precio * item.quantity]
                );
            });

            // Ejecutar todas las consultas de detalles del pedido
            await t.batch(queries);
        });

        // Limpiar el carrito después de registrar el pedido
        req.session.cart = [];
        res.send('Pedido enviado y registrado en la base de datos. Gracias por su compra!');
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al procesar el pedido.");
    }
});

app.get('*', (req, res) => {
    res.redirect('/');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
