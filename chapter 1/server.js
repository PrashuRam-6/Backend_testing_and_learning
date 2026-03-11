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

app.use(express.json())

const port  = process.env.PORT


app.get('/api/dashboard',(req,res)=>{
    res.send(data)
})

app.get('/api/dashboard/bro',(req,res)=>{
    res.send('hello')
})

app.get('/',(req,res)=>{
    res.send(`
        <body style="background-color: pink;">
        <h1>Hello Bro</h1>
        <p>${JSON.stringify(data)}</p>
        </body?
        `)
})

app.post('/api/data',(req,res)=>{
    //lets say some one wants to create a user
    const newEntry = req.body
    data.push(newEntry)
    console.log(`Added ${JSON.stringify(newEntry)}`)
    res.sendStatus(201)
    console.log(data);
    
    
}
)




app.listen(port , ()=>{
    console.log(`Server Started at Port Number ${port}`)
})