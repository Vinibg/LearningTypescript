import express from 'express'
import {User} from "./models/User"

const app = express()
const PORT = 5899
const HOST = "0.0.0.0"

app.get("/",(req,res)=>{
    const user = new User("Ricardo")
    res.send(user.getName())
})

app.listen(PORT, HOST)