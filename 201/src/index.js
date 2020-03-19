import express from 'express'
const app=express()
const port=3000
app.get('/zbroj', (req,res)=>{
    let a=parseInt(req.query.a)
    let b=parseInt(req.query.b)
    let suma=a+b
    res.send(`suma:${suma}`)
    console.log(req.query)
})
app.get('/oduzimanje', (req,res)=>{
    let a=parseInt(req.query.a)
    let b=parseInt(req.query.b)
    let razlika=a-b
    res.send(`razlika:${razlika}`)
    console.log(req.query)
})
app.get('/djeljenje', (req,res)=>{
    let a=parseInt(req.query.a)
    let b=parseInt(req.query.b)
    let djeljenje=a/b
    res.send(`djeljenje:${djeljenje}`)
    console.log(req.query)
})
app.get('/mnozenje', (req,res)=>{
    let a=parseInt(req.query.a)
    let b=parseInt(req.query.b)
    let mnozenje=a*b
    res.send(`mnozenje:${mnozenje}`)
    console.log(req.query)
})
app.listen(port, ()=> console.log(`Slušam na portu ${port}`))