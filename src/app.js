const express = require ('express')
const app = express ();
const path = require ('path');

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req,res)=>{
    res.sendFile (path.resolve(__dirname,'./views/home.ejs'));
})

app.post('/register', (req,res)=>{
    res.sendFile (path.resolve(__dirname,'./views/home.ejs'));
})
app.get('/register', (req,res)=>{
    res.sendFile (path.resolve(__dirname,'./views/register.ejs'));
})

app.get('/login', (req,res)=>{
    res.sendFile (path.resolve(__dirname,'./views/login.ejs'));
})

app.post('/login', (req,res)=>{
    res.sendFile (path.resolve(__dirname,'./views/logged.html'));
})

// * Vistas *//
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'));

app.get ('/', (req,res)=>{
    res.render('index')
});

app.use (express.static('public')); /*para ver los estilos*/

/*const methodOverride =  require('method-override');/*para put y delete*/
/*app.use( methodOverride ("_method"))*/

app.use((req,res, next)=>{res.status(404).render('not-found');
}) /*para error*/

// ****** Middlewares *******

app.use(express.static(path.join(__dirname, './public')));
/*app.use(express.urlencoded({ extended: false }));*/
app.use(express.json()); //  archivos JSON
/*app.use(methodOverride('_method')); // POST en PUT Y DELETE*/

// ** RUTAS ** 
const main = require ('./src/routes/main');
const products = require ('./src/routes/products');

app.use('/',main);
app.use('/products',products);


app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});