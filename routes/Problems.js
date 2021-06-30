const express = require("express")
const router = express.Router()
var mongoose = require('mongoose')
const Problem = mongoose.model("Problems")

router.get("/", (req, res) => {
    Problem.find().then((problems) => {
        res.json({problems})
    })
})

router.post('/', (req, res) => {
    var { puzzleId, FEN, Moves, Rating, Themes, GameUrl } = req.body
    var items = {
        puzzleId,
        FEN,
        Moves,
        Rating,
        Themes,
        GameUrl
    }

    

    Problem.create(items, (err, problem) => {
        console.log(err)
    })

    Problem.findOne({puzzleId}).then((datas) => {
        res.send(datas)
    })
})

router.delete('/:id', (req, res) => {
    var id = req.params.id
    Problem.deleteOne({_id: id}).then((problem) => {
        res.json(problem)
    })
    
})


module.exports = router