const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');



/* Register */
router.get('/register', controller.register);
router.post('/register', (req,res)=> {
    res.send('Ya te registraste ');
});


/* Login */
router.get('/login', controller.login);
router.post('/login', (req,res)=>{
    res.send('Ya te logueaste ');
});



module.exports = router;
