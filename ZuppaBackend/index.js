import express from 'express'

const app = express()
const PORT = 4000 ;

app.get("/", function(req,res){
    res.send("HELLO WORLD")
})

app.listen(PORT,()=>{
console.log("Server running successfully",PORT)
})