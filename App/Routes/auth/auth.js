// this is where all the create account, login, logout, and forgot password routes are located
// this is where the user is redirected to the correct page after creating an account

import express from 'express'
const router = express.Router()

router.get('/login', (req, res) =>{
    res.send('login')
})


export default router