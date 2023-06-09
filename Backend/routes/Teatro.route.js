//defino controlador para el manejo de CRUD
const { espectadorCtrl, ticketCtrl } = require('./../controllers/Teatro.controller.js');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion
router.get('/espectador', espectadorCtrl.getEspectadores);
router.get('/espectador/:id', espectadorCtrl.getEspectador);
router.post('/espectador', espectadorCtrl.createEspectador);
router.post('/ticket', ticketCtrl.createTicket);
router.get('/ticket', ticketCtrl.getTickets);
router.get('/ticket/:categoriaEspectador',  ticketCtrl.getTickets);
router.put('/ticket/:id',  ticketCtrl.editTicket);
router.delete('/ticket/:id',  ticketCtrl.deleteTicket);
//exportamos el modulo de rutas
module.exports = router;