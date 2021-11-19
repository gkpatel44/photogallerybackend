const express = require('express');
const app = express()
const cors = require('cors')


app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(202).send(`<h1>welcome to image api home page </h1>`)
})

app.get('/images',(req,res)=>{
    
})

app.listen(3040,()=>console.log("server listening on port 3040"))