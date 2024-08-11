const Bill = require('../models/billModel');
const InventoryItem = require('../models/inventoryModel');

// Create a new bill
exports.createBill = async (req, res) => {
  try {
    const billItems = req.body.items;

    // Update inventory quantities
    for (let item of billItems) {
      let inventoryItem = await InventoryItem.findById(item.itemId);
      if (inventoryItem.quantity < item.quantity) {
        return res.status(400).json({ message: 'Insufficient quantity in inventory' });
      }
      inventoryItem.quantity -= item.quantity;
      await inventoryItem.save();
    }

    // Calculate total amount
    const totalAmount = billItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

    const newBill = new Bill({
      items: billItems,
      totalAmount,
    });

    await newBill.save();
    res.status(201).json(newBill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Retrieve all bills
exports.getBills = async (req, res) => {
  try {
    const bills = await Bill.find().populate('items.itemId');
    res.status(200).json(bills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Retrieve a specific bill
exports.getBillById = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id).populate('items.itemId');
    if (!bill) return res.status(404).json({ message: 'Bill not found' });
    res.status(200).json(bill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
