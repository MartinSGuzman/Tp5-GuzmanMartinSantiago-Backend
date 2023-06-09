//defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../controllers/Transaccion.controller.js');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion
router.get('/', transaccionCtrl.getTransacciones);
router.post('/', transaccionCtrl.createTransaccion);
router.get('/:email', transaccionCtrl.getTransaccion);
router.get('/moneda/:moneda', transaccionCtrl.getTransaccionMoneda);
router.put('/:id', transaccionCtrl.editTransaccion);
router.delete('/:id', transaccionCtrl.deleteTransaccion);
//exportamos el modulo de rutas
module.exports = router;