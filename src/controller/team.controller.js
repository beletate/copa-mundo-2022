const teamService = require('../service/team.service')

const create = (req, res) => {
  if (validateFields(res, req.body)) {
    teamService.create(req.body)
    res.status(201).send('Team has been created successfully!')
  }
}

const listAll = (req, res) => res.send(teamService.listAll())

const update = (req, res) => { 
  const teamId = req.params.id

  const team = teamService.getById(teamId)
  if (team) {
    teamService.update(req.params.id, req.body)
    res.send('Team has been updated successfully!')
  } else {
    res.status(404).send('Team not found.')
  }
}

const remove = (req, res) => {
  const teamId = req.params.id

  const team = teamService.getById(teamId)
  if (team) {
    teamService.remove(req.params.id)
    res.send('Team has been removed successfully!');
  } else {
    res.status(404).send('Team not found.')
  }
}

const getById = (req, res) => {
  const team = teamService.getById(req.params.id)
  if (team) {
    res.send(team)
  } else {
    res.status(404).send('Team not found')
  }
}

const validateFields = (res, team) => {
  if (!team.codigo || team.codigo.trim() == '') {
    res.status(400).send('Campo código é obrigatório!')
    return false
  }
  if (!team.pais || team.pais == '') {
    res.status(400).send('Campo pais é obrigatório!')
    return false
  }
  if (!team.grupo || team.grupo.trim() == '') {
    res.status(400).send('Campo grupo é obrigatório!')
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