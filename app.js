const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const cors = require('cors')
const File = require("./src/models")
const multer= require('multer')
const DIR="public/"
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR)
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

var upload = multer({ storage: storage });

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.get("/",(req,res)=>{
    res.status(202).send(`<h1>welcome to image api home page </h1>`)
})


app.post('/upload',upload.single("file"),(req,res)=>{
console.log(req.file);
})

    
app.get('/images',(req,res)=>{    
})

app.listen(3040,()=>console.log("server listening on port 3040"))