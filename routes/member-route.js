const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const memberController = require('../controllers/member-controller')

router.get('/mem', authenticate, memberController.getByUser)
router.get('/all-status', authenticate, memberController.getAllStatus)
router.post('/members', authenticate, memberController.createMember)
router.put('/:id', authenticate, memberController.updateMember)
router.delete('/:id', authenticate, memberController.deleteMember)

module.exports = router