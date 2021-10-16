const database = []
let mySequenceId = 1

const create = team => {
  team.id = mySequenceId++ 
  database.push(team)
}

const listAll = () => database

const update = (teamId, team) => {
  const teamIndex = database.findIndex(
    sub => sub.id == teamId
  )
  team.id = Number(teamId)
  if (teamIndex > -1) {
    database[teamIndex] = team
  }
}

const remove = teamId => {
  const teamIndex = database.findIndex(
    sub => sub.id == teamId
  )

  if (teamIndex > -1) {
    database.splice(teamIndex, 1)
  }
}

const getById = teamId => {
  const teamIndex = database.findIndex(
    sub => sub.id == teamId
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