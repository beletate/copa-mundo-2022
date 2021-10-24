const express = require('express')
const swaggerUi = require('swagger-ui-express')
const teamRouter = require('./route/team.route')
const playerRouter = require('./route/player.route')
const swaggerFile = require('../swagger.json')

const app = express()
app.use(express.json())
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get('/', (req, res) => {
  res.send('Copa do mundo')
})
app.use('/team', teamRouter)
app.use('/player', playerRouter)

app.listen(port, () => {
  console.log(`Server started.`)
})