const db = require('../models')

console.log("Eesse é o db: ", db)

const Task = db.task
const Op = db.Sequelize.Op

exports.create = (req, res) => {
    if(!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        })

        return
    }

    const task = {
        title: req.body.title,
        isActive: 1
    }

    Task.create(task)
        .then(data => {
            res.status(201).send({
                message: "Task added",
                data: data
            })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Internal erro while creating"
            })
        })
}

exports.findAll = (req, res) => {
    Task.findAll()
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Internal erro reading taks"
            })
        })
}

exports.update = (req, res) => {
    const id = req.body.id

    const task = {
        id: req.body.id,
        isActive: req.body.isActive = 0 ? 1 : 0
    }

    Task.update(task, {
        where: { id: id}
    })
        .then(num => {
            if(num == 1) {
                res.status(202).send({
                    message: "Updated sucessfully"
                })
            } else {
                res.send({
                    message: "Cannot update"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error internal while update"
            })
        })
}

exports.delete = (req, res) => {
    Task.findByPk(req.body.id)
        .then(data => {
            data.destroy()
        })
        .then(num => {
            res.status(202).send({
                message: "Deleted",
                data: num
            })
        })
        .catch(err => {
            res.status(500).send({
                message: "Interal error",
                err: err
            })
        })
}