const express = require('express')
const cors = require('cors')

const app = express()
const morgan = require('morgan')

const db = require('./models/index')
db.sequelize.sync() // MODE PROD
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.")
// }) // MODE DEV

const rotaTodos = require('./routes/todos')

app.use(morgan('dev'))
app.use(express.urlencoded({extend: false}))
app.use(express.json())
app.use(cors())

app.use('/todos', rotaTodos)

app.use((req, res, next) => {
    return res.status(200).send({
        mensagem: "It works!"
    })
})

module.exports = app