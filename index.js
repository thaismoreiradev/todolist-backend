require("dotenv").config()
const cors = require("cors")
const express = require("express")


const app = express()
app.use(cors())
app.use(express.json())


let todos = [{
    id: 1,
    text: "go to the shopping",
    completed: false,
},
{
    id: 2,
    text: "study 1h of spanish",
    completed: false,
},
{
    id: 3,
    text: "call to my grandmother",
    completed: true,
}
]



app.get("/api/", (req, res) => {
    res.json(todos)
})


app.post("/api/", (req, res) => {
    todos.push(req.body)
    res.json(todos)
})


app.put("/api/put/:id", (req, res) => {
    todos = todos.map(item => {
        if(item.id === Number(req.params.id)){
            return req.body
        }else{
            return item
        }
    })
    res.json(todos)
})



app.delete("/api/delete/:id", (req, res) => {
    todos = todos.filter((todo) => todo.id !== Number(req.params.id))
    res.send(todos)
})







//run server
app.listen(8000, () => {
    console.log(`server has started on port ${8000}`)
})