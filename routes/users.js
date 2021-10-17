const express = require ('express');
const router = express.Router( );
const controller = require('../controllers/userController')
const path = require('path');

module.exports = router;

/* Register */
router.get('/register', controller.register=>{
   
});
router.post('/register', (req,res)=> {
    res.send('Ya te registraste campeón');
});
/* Login */
router.get('/login', (req,res)=>{
    res.sendFile(__dirname + '../views/login.html');
});
router.post('/login', (req,res)=>{
    res.send('Ya te logueaste');
});