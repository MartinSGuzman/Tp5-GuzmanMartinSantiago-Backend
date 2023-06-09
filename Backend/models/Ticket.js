const mongoose = require('mongoose');
const Espectador = require('./Espectador');
const { Schema } = mongoose;

const TicketSchema = new Schema({
    categoriaEspectador: { type: String, required: true },
    fechaCompra: { type: String, required: true },  
    precioTicket: { type: Number, required: true },
    espectador: { type: Schema.Types.ObjectId, ref: 'Espectador' }
});

module.exports = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);