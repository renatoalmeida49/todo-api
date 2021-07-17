const express = require('express')
const router = express.Router()

const TodosController = require('../controllers/todos-controller')

router.get('/', TodosController.findAll)
// router.get('/:id', TodosController.getId)
router.post('/', TodosController.create)
router.patch('/', TodosController.update)
router.delete('/', TodosController.delete)

module.exports = router