import express from 'express'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router = express.Router()

router.post('/register',(req,res)=>{

    // Registration of a new user

    const {username , password} = req.body
    console.log(username,password);
    res.sendStatus(200)
    


})

router.post('/login',(req,res)=>{

})



export default router