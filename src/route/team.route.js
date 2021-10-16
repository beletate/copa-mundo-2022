const express = require('express')
const router = express.Router()
const teamController = require('../controller/team.controller')

router.post('/', teamController.create)
router.get('/', teamController.listAll)
router.get('/:id', teamController.getById)
router.put('/:id', teamController.update)
router.delete('/:id', teamController.remove)

module.exports = router
