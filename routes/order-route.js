const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const orderController = require('../controllers/order-controller')

router.get('/or', authenticate, orderController.getByUser)
router.post('/orders', authenticate, orderController.createOrder)
router.put('/:id', authenticate, orderController.updateOrder)
router.delete('/:id', authenticate, orderController.deleteOrder)

module.exports = router