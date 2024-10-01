const express = require('express');
const inmuebleController = require('../controllers/inmuebleController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, inmuebleController.create);
router.get('/', authMiddleware, inmuebleController.findAll);
router.put('/:id', authMiddleware, inmuebleController.update);
router.delete('/:id', authMiddleware, inmuebleController.delete);

module.exports = router;