const express = require('express')
const router = express.Router()
const jobs = require('../model/jobs')

router.get('/add',(req,res)=>{
    res.send('DEU CERTO')
})

router.post('/add',(req,res)=>{
    let {title,description,email,company,salary,new_job} = req.body

    jobs.create({
        title,
        description,
        email,
        company,
        salary,
        new_job
    })
    .then(()=>{
        res.redirect('/')
    })
    .catch(erro=>{
        console.log('Ocorreu um erro' + erro)
    })
})

module.exports = router