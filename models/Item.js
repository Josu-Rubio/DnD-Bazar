const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: {
    type: String,
    required: true,
    index: true,
  },
  // image: {
  //   type: String,
  //   index: true,
  // },
  description: {
    type: String,
    required: true,
  },
  /*
    tags: [
      {
        type: String
        enum: ['Armadura', 'Arma', 'Equipo Aventurero', 'Herramienta', 'Montura', 'Arreo', 'Vehículo Acuático', 'Mercancía', 'Alimentación', 'Servicio', 'Baratija'],
        index: true,
      },
    ],
  */
  category: {
    type: String,
    required: true,
    index: true,
  },

  price: {
    type: Number,
    required: true,
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Item = mongoose.model('item', ItemSchema);
