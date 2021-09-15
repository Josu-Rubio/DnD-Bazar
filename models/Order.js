const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userId: {
    type: String,
    ref: 'user',
  },
  items: [
    {
      productId: {
        type: String,
        ref: 'item',
      },
      name: String,
      quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity cannot be less than 1'],
      },
      price: Number,
    },
  ],
  bill: {
    type: Number,
    required: true,
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Order = mongoose.model('order', OrderSchema);
