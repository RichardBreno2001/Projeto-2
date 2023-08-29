const sequelize = require('sequelize')

const Banco = new sequelize({
    dialect: 'sqlite',
    storage: './db/banco.db'
})

module.exports = Banco