const playerService = require('../service/player.service')

const create = (req, res) => {
  if (validateFields(res, req.body)) {
    playerService.create(req.body)
    res.status(201).send('Player has been created successfully!')
  }
}

const listAll = (req, res) => res.send(playerService.listAll())

const update = (req, res) => { 
  const playerId = req.params.id

  const player = playerService.getById(playerId)
  if (player) {
    playerService.update(req.params.id, req.body)
    res.send('Player has been updated successfully!')
  } else {
    res.status(404).send('Player not found.')
  }
}

const remove = (req, res) => {
  const playerId = req.params.id

  const player = playerService.getById(playerId)
  if (player) {
    playerService.remove(req.params.id)
    res.send('Player has been removed successfully!');
  } else {
    res.status(404).send('Player not found.')
  }
}

const getById = (req, res) => {
  const player = playerService.getById(req.params.id)
  if (player) {
    res.send(player)
  } else {
    res.status(404).send('Player not found')
  }
}

const validateFields = (res, player) => {
  if (!player.codigoIdentificador || player.codigoIdentificador.trim() == '') {
    res.status(400).send('Campo codigo identificador é obrigatório!')
    return false
  }
  if (!player.nome || player.nome.trim() == '') {
    res.status(400).send('Campo nome é obrigatório!')
    return false
  }
  if (!player.numero || player.numero == '') {
    res.status(400).send('Campo número é obrigatório!')
    return false
  }
  if (!player.posicao || player.posicao.trim() == '') {
    res.status(400).send('Campo posição é obrigatório!')
    return false
  }

  return true
}

module.exports = {
  create,
  listAll,
  update,
  remove,
  getById
}