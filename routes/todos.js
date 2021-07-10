const express = require('express')
const router = express.Router()

const TodosController = require('../controllers/todos-controller')

router.get('/', TodosController.get)
router.get('/:id', TodosController.getId)
router.post('/', PedidosController.post)
router.patch('/', TodosController.patch)
router.delete('/', TodosController.delete)