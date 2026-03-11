import express from 'express'
import dotenv from 'dotenv'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'


dotenv.config({path: '../.env'})

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)



const app = express()

app.use(express.static(path.join(__dirname,'../public')))
app.use(express.json())

    //setting up the frontend through the backend

        app.get( '/' , (req,res) => {

            res.sendFile(path.join(__dirname,'public','index.html'))

        })



//Routes
app.use('/auth',authRoutes)
app.use('/todos',todoRoutes)





const port = process.env.PORT || 3000

app.listen(port ,()=>{
    console.log(`The server is up and running on the port number ${port}`);
    
})