const express = require('express');
const cors = require('cors');
const { mongoose } = require('./database');
var app = express();
//middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));
//Cargamos el modulo de direccionamiento de rutas
app.use('/api/producto', require('./routes/Producto.route.js'));
app.use('/api/transaccion', require('./routes/Transaccion.routes.js'));
app.use('/api/teatro', require('./routes/Teatro.route.js'));
//app.use('/api/sector', require('./routes/sector.route'));
//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
    console.log(`Servidor levantado en puerto`, app.get('port'));
});
