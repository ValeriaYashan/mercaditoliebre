const express= require('express');
const router = express.Router();
const productsController= require('../controllers/productsController');
router.get('/', productsController.index);

/*multer*/
/*const multer=require ('multer');
multer.diskStorage({
    destination : (req, file, cb) => {
     cb(null, './public/images/avatars');
    },
    filename: function (req, file, cb) {
        cb{(null,
            '${Date.now()}_img_'${path.extname(file.originalname)}');
      }
    })
    const uploadFile=multer({storage});*/

    
module.exports = router;