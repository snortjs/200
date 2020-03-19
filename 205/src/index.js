import express from 'express'
const app=express()
const port=3000
let a1 = ["aa", "b1", "b1", "ce", "aa", "ce", "b1", "z"]
app.get('/', (req,res)=>{
    let brojac = a1.reduce((s,e) =>{
        console.log(s[e])
        if(s[e]) s[e]++;
        else s[e]=1;
        return s;
    },{});
console.log(brojac)
})
app.listen(port, ()=> console.log(`Slušam na portu ${port}`))