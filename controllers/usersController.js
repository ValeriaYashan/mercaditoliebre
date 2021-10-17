let controller ={
    register: (req, res)=>{
        res.sendFile(paht.resolve(__dirname, '/views/register.html'));

    },
    registered: function(req, res){

    },
    login (req, res){

    }
}

module.exports= controller;