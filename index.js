const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const connection = require('./database/database')
const pergunta = require("./database/pergunta")

connection
    .authenticate()
    .then(() => {
        console.log("Conexão realizada com o banco de dados")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })

// estou dizendo para o express utilizar o ejs como view engine 
app.set('view engine', 'ejs')
app.use(express.static('public'))

//configirando bodyparser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//rotas
app.get("/", (req, res) => {

    //raw ele faz uma pesquisa crua, só pega os dados
    pergunta.findAll({raw: true, order:[
        ['id','DESC']
    ]}).then(perguntas => {
        console.log(perguntas)
        res.render("index", {
            perguntas: perguntas
        })

    })

})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

// utilizamos post por conta do metodo do nosso formulário
app.post("/salvarpergunta", (req, res) => {

    // recebendo dados do formulário
    let titulo = req.body.titulo
    let descricao = req.body.descricao

    // passando os dados para o banco de dados
    pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/")
    })
})

app.get("/pergunta/:id", (req,res) => {
    let id = req.params.id;
    pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined){ // pergunta encontrada 

        } else {

        }
    })
})

app.listen(8080, () => {
    console.log("App rodando")
})