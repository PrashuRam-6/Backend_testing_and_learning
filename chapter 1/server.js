import express from 'express'
import dotenv from 'dotenv'

dotenv.config({path: '../.env'})

const data = [{
    "title"  : "Joke 1",
    "Content" : "Ek Aadmi"
},
{
    "title"  : "Joke 2",
    "Content" : "Ek Aadmi"
},
{
    "title"  : "Joke 3",
    "Content" : "Ek Aadmi"
},
{
    "title"  : "Joke 4",
    "Content" : "Ek Aadmi"
},
]

const app = express()

const port  = process.env.PORT

app.get('/',(req,res)=>{
    res.send('<h1>Hello Guys From the backend you know!?<h1><input />')
})

app.get('/api/dashboard',(req,res)=>{
    res.send(data)
})

app.get('/api/dashboard/bro',(req,res)=>{
    res.send('hello')
})


app.listen(port , ()=>{
    console.log(`Server Started at Port Number ${port}`)
})