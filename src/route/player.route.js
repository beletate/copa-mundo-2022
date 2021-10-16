const express = require('express')
const router = express.Router()
const playerController = require('../controller/player.controller')

router.post('/', playerController.create)
router.get('/', playerController.listAll)
router.get('/:id', playerController.getById)
router.put('/:id', playerController.update)
router.delete('/:id', playerController.remove)

module.exports = router
