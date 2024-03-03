const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const productController = require('../controllers/product-controller')

router.get('/pro', authenticate, productController.getByUser)
router.get('/all-status', authenticate, productController.getAllStatus)
router.post('/products', authenticate, productController.createProduct)
router.put('/:id', authenticate, productController.updateProduct)
router.delete('/:id', authenticate, productController.deleteProduct)

module.exports = router