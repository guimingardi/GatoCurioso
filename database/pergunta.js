const Sequelize = require("sequelize")
const connection = require("./database")

const Pergunta = connection.define('perguntas', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
})

// sincronizando com o banco de dados, o salse significa que ele
// não vai forcar caso a tabela exista no banco de dados
Pergunta.sync({force: false}).then(() => {
    console.log("Tabela criada")
})

module.exports = Pergunta