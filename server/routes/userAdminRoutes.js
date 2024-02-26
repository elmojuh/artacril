const express = require('express');
const router = express.Router();
const userAdminController = require('../controllers/userAdminController');

router.post('/', userAdminController.createAdmin);
router.get('/', userAdminController.listAdmins);
router.get('/:id', userAdminController.getAdminById);
router.put('/:id', userAdminController.updateAdmin);
router.delete('/:id', userAdminController.deleteAdmin);

module.exports = router;
