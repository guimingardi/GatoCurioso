const express = require("express")
const app = express();
const bodyParser = require("body-parser")

// estou dizendo para o express utilizar o ejs como view engine 
app.set('view engine', 'ejs')
app.use(express.static('public'))

//configirando bodyparser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//rotas
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

// utilizamos post por conta do metodo do nosso formulário
app.post("/salvarpergunta", (req, res) =>{
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    res.send("Formulário Recebido titulo: " + titulo + " Descrição " + descricao)
})

app.listen(8080, ()=> {
    console.log("App rodando")
})