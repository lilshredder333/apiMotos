const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './src/uploads')
    }, 
    filename: function(req, file, cb){
        // Me gusta mas que se mantenga el nombre original del archivo :P
        //Para que no se repitan los nombres de los archivos, evitamos errores!

        const timestamp = Date.now(); //  timestamp actual
        const originalName = file.originalname; //  nombre original del archivo
        cb(null, `${timestamp}-${originalName}`); // tenemos nombre único!

    }
})

const upload = multer({storage});

module.exports = upload;