const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  totalAmount: { type: Number, required: true },
  items: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'InventoryItem', required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    }
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bill', billSchema);
