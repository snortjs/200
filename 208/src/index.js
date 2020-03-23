import express from 'express'
const app=express()
const port=3000
let lista = [
    {
    id: 10001,
    createdBy: "nikola@tankovic.me"
    },
    {
    id: 10002,
    createdBy: "marko@markovic.me"
    },
    {
    id: 10003,
    createdBy: "iva@ivkovic.me"
    }
   ]
app.get('/', (req,res)=>{
    let a=lista.reduce((s,e) => {
        console.log(e+" -> "+s)
        if(e.id>s) {
            s=e.id;
            return s;
        }
      },0);
      res.send(`${a}`);
})
app.listen(port, ()=> console.log(`Slušam na portu ${port}`))
