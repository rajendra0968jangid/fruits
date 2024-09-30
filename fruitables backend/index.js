const express = require('express')
const app = express()
const port = 3000

app.get('/get', (req, res) => {
    let data = {name:'helo',age:24,address:'jaipur'}
  res.json(data)
})

app.post('/rajendra',(req,res)=>{
    res.send('Hello world !!')
})

app.put('/put',(req,res)=>{
    res.send('Hello put!!!')
})

app.delete('/delete',(req,res)=>{
    res.send('Hello delelte!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})