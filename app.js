const express = require('express')

const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(express.urlencoded({extend: false}))
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Request-With, Content-Type, Accept, Authorization'
    )

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).send({})
    }

    next()
})

app.use((req, res, next) => {
    return res.status(200).send({
        mensagem: "It works!"
    })
})

module.exports = app