const { Router } = require('express');
const productosController= require('../controllers/productosController');
router.get('/', productosController.index);