const express = require('express')
const app   = express()
const db = require('./db/conection')
const bodyParser = require('body-parser')
//ROTAS

app.get('/',(req,res)=>{
    res.render('layouts')
})

app.listen(5000,function(){
    console.log('Ouvindo porta 5000')
})

//Banco de dados

db.
    authenticate()
    .then(()=>{
        console.log('Conectou ao banco de dados')
    })
    .catch(erro=>{
        console.log('Ocorreu um erro' + erro)
    })


//Ativando o body parser

app.use(bodyParser.urlencoded({extended: false}))


//Ativando as rotas do model

app.use('/jobs', require('./rotas/rotas'))




//Handlebars

const exp_handlebars = require('express-handlebars')
const path = require('path')
app.set('views',path.join(__dirname,'views'))

//Definindo qual será o layout principal da aplicação no backend
app.engine('handlebars',exp_handlebars.engine({defaultLayout: 'main'}))

//Biblioteca que será utilizada para renderização
app.set('view engine','handlebars')

//Ativando a pasta dos CSS's no servidor

app.use(express.static(path.join(__dirname,'estilos')))

