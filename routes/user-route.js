const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');
const authenticate = require('../middlewares/authenticate');

router.get('/', userController.getUsers);
router.get('/edit/:id', userController.getUserById); 
router.put('/:id', authenticate, userController.updateUser); 
router.delete('/:id', authenticate, userController.deleteUser);

module.exports = router;