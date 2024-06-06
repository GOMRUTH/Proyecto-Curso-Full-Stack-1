const express = require('express');
const router = express.Router();

//Ruta de principal
router.get('/principal', (req, res) => {
    res.render('principal');
});

// Ruta de productos
router.get('/productos', (req, res) => {
    res.render('productos', { productos });
});

// Ruta de contacto
router.get('/contacto', (req, res) => {
    res.render('contacto');
});

module.exports = router;
