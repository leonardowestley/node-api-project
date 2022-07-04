/*
1.0 npm init
2.0 touch .gitignore && pico .gitignore
2.1 package.json
2.2 packages-lock.json
2.3 node_modules
2.4 ctrl x etr y etr 
3.0 npm i cors express
*/

const express = require('express')
const cors = require('cors')
//const allCoffees = require('./database.json')

const app = express()
app.use(cors())

const { response } = require('express')
const PORT = 5000


app.use(express.json())

app.listen(PORT, () => {
    console.log(`API is listening on ${PORT}`)
})

app.get('/', (req, res) => {
  response.send('API RUNNING!')  
})