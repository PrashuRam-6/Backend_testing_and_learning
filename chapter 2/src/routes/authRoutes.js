import express from 'express'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'
import bcrypt from 'bcryptjs'

const router = express.Router()

router.post('/register',(req,res)=>{

    // Registration of a new user

    const {username , password} = req.body
    console.log(username,password);
   

    //encrypting the password baby

    const hashedPassword = bcrypt.hashSync(password,8)
    console.log(hashedPassword)    

    try{

        const insertUser = db.prepare(`INSERT INTO user (username,password) VALUES (?,?)`)
        const result = insertUser.run(username,hashedPassword)
         
        //Create a default todo assosiated with that user

        const insertnewdefaultTodo = db.prepare(`INSERT INTO todos (user_id,task) VALUES (?,?)`)
        insertnewdefaultTodo.run(result.lastInsertRowid,'Hello :) this is your first default todo lol X)')

         // Create a token baby

         const token = jwt.sign({id:result.lastInsertRowid}, process.env.JWT_SECRET_KEY,{expiresIn : '24h'})
         res.json({token})

    }catch(error)
    {
        console.log(error);
        res.sendStatus(503)
    }


})

router.post('/login',(req,res)=>{

    const {username,password} = req.body

    try{

        const getUser = db.prepare(`SELECT * FROM user WHERE username = ?`)
        const user = getUser.get(username)
        if(!user){return res.status(404).send({message:'USER NOT FOUND'})}
        
            const isPasswordValue = bcrypt.compareSync(password,user.password)

        if(!isPasswordValue){
            return res.sendStatus(404).send({message:'Nice try Buddy!!!!'})
        }
        
        

        const token = jwt.sign({id:user.id}, process.env.JWT_SECRET_KEY, {expiresIn:'24h'})
        res.json({token})
     


    }
    catch(error){
        console.log(error);
        res.sendStatus(503)
        
    }


})



export default router