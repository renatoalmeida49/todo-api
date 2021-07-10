const mysql = require('../mysql').pool

exports.get = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error })}

        conn.query(
            'SELECT * FROM tasks',
            (error, result, field) => {
                if (error) { return res.status(500).send({ error: error })}

                const response = {
                    totalTodos: result.length,
                    todos: result.map(todo => {
                        return {
                            id: todo.id,
                            title: todo.title,
                            created_at: todo.created_at,
                            updated_at: todo.updated_at,
                            is_active: todo.is_active
                        }
                    })
                }

                return res.status(200).send(response)
            }
        )
    })
}

exports.getId = (req, res, next) => {
    return res.status(200).send({
        message: 'Rota getId'
    })
}

exports.post = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error })}

        conn.query(
            `INSERT INTO tasks (title, created_at, updated_at, is_active) VALUES (?, ?, ?, ?)`,
            [
                req.body.title,
                created_at = new Date(),
                updated_at = new Date(),
                is_active = 1
            ],
            (error, result, field) => {
                conn.release()

                if (error) { return res.status(500).send({ error: error })}

                const response = {
                    mensagem: "Nota inserida com sucesso",
                    nota: {
                        id: result.insertId,
                        title: req.body.title
                    }
                }

                return res.status(201).send(response)
            }
        )
    })
}

exports.patch = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error })}

        conn.query(
            `UPDATE tasks
                SET is_active = ?,
                    updated_at = ?
                WHERE id = ?`,
            [
                req.body.is_active = 0 ? 1 : 0,
                updated_at = new Date(),
                req.body.id
            ],
            (error, result, field) => {
                conn.release()
                
                if (error) { return res.status(500).send({ error: error })}

                const response = {
                    mensagem: "Nota atualizada!",
                    notaAtualizada: {
                        id: req.body.id,
                        is_active: req.body.is_active = 0 ? 1 : 0
                    }
                }

                return res.status(200).send(response)
            }
        )
    })
}

exports.delete = (req, res, next) => {
    return res.status(200).send({
        message: 'Rota delete'
    })
}