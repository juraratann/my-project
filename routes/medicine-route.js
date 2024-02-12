const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const { medicineController } = require('../controllers/medicine-controller')

router.get('/', authenticate,medicineController.getByUser)
router.post('/', authenticate, medicineController.createMedicine)
router.put('/id', authenticate,medicineController.updateMedicine)
router.delete('/id', medicineController.deleteMedicine)

module.exports = router