const express = require('express')
const swaggerUi = require('swagger-ui-express')
const teamRouter = require('./route/team.route')
const playerRouter = require('./route/player.route')
const swaggerFile = require('../swagger.json')

const app = express()
app.use(express.json())
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get('/', (req, res) => {
  res.send('Check /documentation to see all endpoints availables')
})
app.use('/team', teamRouter)
app.use('/player', playerRouter)

app.listen(process.env.PORT || 3000, function(){
  console.log("Server started.");
});