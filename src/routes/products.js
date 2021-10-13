const { Router } = require('express');
const productosController= require('../controllers/productosController');
router.get('/', productosController.index);

/*multer*/
const multer=require ('multer');
multer.diskStorage({
    destination : (req, file, cb) => {
     cb(null, './public/images/avatars');
    },
    filename: function (req, file, cb) {
        cb{(null,
            '${Date.now()}_img_'${path.extname(file.originalname)}');
      }
    })
    const uploadFile=multer({storage});