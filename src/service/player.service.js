const database = []
let mySequenceId = 1

const create = player => {
  player.id = mySequenceId++ 
  database.push(player)
}

const listAll = () => database

const update = (playerId, player) => {
  const teamIndex = database.findIndex(
    sub => sub.id == playerId
  )
  player.id = Number(playerId)
  if (teamIndex > -1) {
    database[teamIndex] = player
  }
}

const remove = playerId => {
  const teamIndex = database.findIndex(
    sub => sub.id == playerId
  )

  if (teamIndex > -1) {
    database.splice(teamIndex, 1)
  }
}

const getById = playerId => {
  const teamIndex = database.findIndex(
    sub => sub.id == playerId
  )

  if (teamIndex > -1) {
    return database[teamIndex]
  }
  return null
}

module.exports = {
  create,
  listAll,
  update,
  remove,
  getById
}