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

})



export default router