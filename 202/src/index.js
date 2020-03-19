import express from 'express'
const app=express()
const port=3000
function fib(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[n]
  }
app.get('/', (req,res)=>{
    let n=parseInt(req.query.n)
    res.send(`suma:${fib(n)}`)
    console.log(req.query)
})
app.listen(port, ()=> console.log(`Slušam na portu ${port}`))