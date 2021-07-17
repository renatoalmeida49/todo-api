module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
        title: {
            type: Sequelize.STRING
        },
        isActive: {
            type: Sequelize.INTEGER
        }
    })

    return Task
}