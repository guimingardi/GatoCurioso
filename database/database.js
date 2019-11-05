const Sequelize = require('sequelize')
const connection = new Sequelize('gatocurioso' , 'root', 'bandtec', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection