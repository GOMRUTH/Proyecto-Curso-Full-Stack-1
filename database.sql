CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    precio INTEGER NOT NULL,
    descripcion TEXT NOT NULL,
    imagen TEXT NOT NULL,
    tipo VARCHAR(50) NOT NULL
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    total NUMERIC NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id),
    product_id INTEGER REFERENCES productos(id),
    quantity INTEGER NOT NULL,
    total NUMERIC NOT NULL
);
INSERT INTO productos (nombre, precio, descripcion, imagen, tipo) VALUES
('Colita Moño Rosa', 1000, 'Cantidad: x2', '/img/productos/photo_2024-03-24_21-51-37.jpg', 'monos'),
('Colita Moño Azul', 1500, 'Cantidad: x2', '/img/productos/photo_2024-03-24_21-51-26.jpg', 'monos'),
('Colita Moño Coquette', 900, 'Cantidad: x Unid.', '/img/productos/9bd059a892e6655abbf32ae355e5b353.jpg', 'monos'),
('Colitas Moños Blanco y Azul', 1800, 'Cantidad: x2', '/img/productos/1bcdd5606e7d636121d091bb702ac0b2.jpg', 'monos'),
('Moño Coquette Celeste y Blanco', 1500, 'Cantidad: x Unid.', '/img/productos/461a82f486aaad86b9d65aa212f107db.jpg', 'monos'),
('Moño Coquette Blanco y Celeste', 1800, 'Cantidad: x2', '/img/productos/64c574bbbd77cc1451333f793d3fe25a.jpg', 'monos'),
('Vincha Moños', 2000, 'Cantidad: x3', '/img/productos/7778393259587103e5f45ccf826cc860.jpg', 'monos'),
('Moño Coquette', 1300, 'Cantidad: x Unid.', '/img/productos/741bc23d9700d7d097bf554c00be1e59.jpg', 'monos'),
('Almohada Vaquita', 1600, 'Cantidad: x Unid.', '/img/productos/photo_2024-03-24_21-50-35.jpg', 'munecas'),
('Muñeca Piernas largas', 1800, 'Cantidad: x Unid.', '/img/productos/4e455a48f061e2b5161d70612ac9b080.jpg', 'munecas'),
('Almohada Gatito', 1500, 'Cantidad: x Unid.', '/img/productos/4fd2c22d4fb69181334e03b4cc3d3a56.jpg', 'munecas'),
('Muñeca Coqueta', 1000, 'Cantidad: x Unid.', '/img/productos/66fdef09040ce827bec7fcca69b45591.jpg', 'munecas'),
('Muñeca Gatita', 1100, 'Cantidad: x Unid.', '/img/productos/93fd9a33695aa3d68ba74f371e94c783.jpg', 'munecas'),
('Muñeca Duende Blanco', 1300, 'Cantidad: x Unid.', '/img/productos/5589a2b1e408c9894ebc7d2c6f21b9a4.jpg', 'munecas'),
('Muñeco Monito Celeste', 1400, 'Cantidad: x Unid.', '/img/productos/9250684287b27643701b5b78ac792a79.jpg', 'munecas'),
('Combo Almohada + Muñeca', 1700, 'Cantidad: x Unid.', '/img/productos/photo_2024-03-24_21-50-32.jpg', 'munecas');
