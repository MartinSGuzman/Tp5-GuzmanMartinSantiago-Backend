const Ticket = require('../models/Ticket.js');
const Espectador = require('../models/Espectador.js');


const espectadorCtrl = {}
const ticketCtrl = {}

//ESPECTADORES
//GET TODOS
espectadorCtrl.getEspectadores = async (req, res) => {
    var espectadores = await Espectador.find();
    res.json(espectadores);
}
//POST
espectadorCtrl.createEspectador = async (req, res) => {
    var espectador = new Espectador(req.body);
    try {
        await espectador.save();
        res.status(201).json({
            'status': '1',
            'msg': 'Espectador guardada.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
//GET UNO POR ID
espectadorCtrl.getEspectador = async (req, res) => {
    const espectador = await Espectador.findById(req.params.id);
    res.json(espectador);
}


//TICKETS

//GET TODOS

ticketCtrl.getTickets = async (req, res) => {
    var ticket = await Ticket.find();
    res.json(ticket);
}

//GET FILTRADO

ticketCtrl.getTicket = async (req, res) => {
    const { categoria } = req.params;
    console.log(categoria);
    var ticket = await Ticket.find({ categoriaEspectador: categoria});
    res.json(ticket);
}
//POST

ticketCtrl.createTicket = async (req, res) => {
    try {
        // Obtén los datos del ticket del cuerpo de la solicitud
        const { categoriaEspectador, fechaCompra, precioTicket, espectador } = req.body;
        
        // Crea una instancia del modelo Espectador con los datos del objeto espectador recibido
        const nuevoEspectador = new Espectador(espectador);

        // Guarda el objeto espectador en la base de datos
        await nuevoEspectador.save();

        // Crea una instancia del modelo Ticket y asigna el ID del objeto espectador
        const nuevoTicket = new Ticket({
            categoriaEspectador,
            fechaCompra,
            precioTicket,
            espectador: nuevoEspectador._id
        });

        // Guarda el ticket en la base de datos
        await nuevoTicket.save();

        res.status(201).json({
            'status': '1',
            'msg': 'Ticket guardado.'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        });
    }
};

//PUT
ticketCtrl.editTicket = async (req, res) => {
    try {
        const { id } = req.params; 
        await Ticket.findByIdAndUpdate(id, req.body); 
        res.json({
            'status': '1',
            'msg': 'Ticket updated'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        });
    }
};

//DELETE 
ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Ticket removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = { espectadorCtrl, ticketCtrl };