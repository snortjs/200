import express from 'express'
const app=express()
const port=3000
let studenti = [
    {oib: "12312349172", ime: "Hrvoje", prezime: "Horvat"},
    {oib: "82723412342", ime: "Ivana", prezime: "Ivić"},
    {oib: "97283742342", ime: "Stjepan", prezime: "Stjepanović"},
   ]
app.get('/', (req,res)=>{
    let rezultat=studenti.reduce((s,e)=>s+e.ime.length,0) //mora krenut od 0 da ne pokupi garbage
console.log(rezultat)
res.send(`${rezultat}`)
})
app.listen(port, ()=> console.log(`Slušam na portu ${port}`))
