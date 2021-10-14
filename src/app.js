
const express = require('express');
const app = express();
const path = require('path');


/* config template */
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

/* Config express */
app.use(express.static(path.resolve(__dirname, '../public')));


/*ir a los fomrularios probando*/

app.get('/register', (req,res)=>{
    res.render ('register');
})

app.get('/login', (req,res)=>{
    res.render('login')
})

app.post('/register', (req,res)=>{
    res.render ('registered');
})

app.post('/login', (req,res)=>{
    res.render ('logged');
})


/* Routes */
const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);




app.listen(process.env.PORT || 3000, () => console.log('Servidor funcionando'));

