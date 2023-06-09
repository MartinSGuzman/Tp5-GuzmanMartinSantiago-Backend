const Transaccion = require('../models/Transaccion');


const transaccionCtrl = {}

transaccionCtrl.getTransacciones = async (req, res) => {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.createTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.status(201).json({
            'status': '1',
            'msg': 'Transaccion guardada.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
transaccionCtrl.getTransaccion = async (req, res) => {
    const { email } = req.params;
    const transaccion = await Transaccion.find({emailCliente:email});
    res.json(transaccion);
}

transaccionCtrl.getTransaccionMoneda = async (req, res) => {
    const { moneda } = req.params;
    const transaccion = await Transaccion.find({
      $or: [
        { monedaOrigen: moneda },
        { monedaDestino: moneda }
      ]
    });
    res.json(transaccion);
  }

transaccionCtrl.editTransaccion = async (req, res) => {
    const vtransaccion = new Transaccion(req.body);
    try {
        await Transaccion.updateOne({ _id: req.body._id }, vtransaccion);
        res.json({
            'status': '1',
            'msg': 'transaccion updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
transaccionCtrl.deleteTransaccion = async (req, res) => {
    try {
        await Transaccion.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'transaccion removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = transaccionCtrl;