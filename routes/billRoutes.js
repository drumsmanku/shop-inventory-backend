const express = require('express');
const router = express.Router();
const billController = require('../controllers/billController');

router.post('/', billController.createBill);
router.get('/', billController.getBills);
router.get('/:id', billController.getBillById);

module.exports = router;
