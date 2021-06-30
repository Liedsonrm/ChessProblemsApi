const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

require("./models/problemSchema")
const problems = require("./routes/Problems")

const app = express()

mongoose.connect("mongodb://localhost:27017/chessData", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/problems', problems)




const port = 8081
app.listen(port, ()=>{
    console.log("-> Funcionando direitinho e rodando, lek.")
})