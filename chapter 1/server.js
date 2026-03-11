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
    res.send(`
        <body style="background-color: pink;">
        <h1>Hello Bro, this is the dashboard</h1>
        
        <a href="/">Go back to the home page</a>
        </body?
        `)
    

})

app.get('/',(req,res)=>{
    res.send(`
        <body style="background-color: pink;">
        <h1>Hello Bro</h1>
        <p>${JSON.stringify(data)}</p>
        <a href="/api/dashboard/bro">Delete the last element</a>
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


app.delete('/api/deleteData',(req,res)=>{
    const deletedData = data.pop()

    console.log(`Deleted the ${JSON.stringify(deletedData)} from the data array so the new data array is ${JSON.stringify(data)}`)
    
    
}
)



app.listen(port , ()=>{
    console.log(`Server Started at Port Number ${port}`)
})