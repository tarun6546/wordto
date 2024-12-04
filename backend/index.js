const express = require('express')
const multer  = require('multer')
const docxC = require('docx-pdf');
const app = express()
const path = require("path");

const port = 3000
//storage file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
  app.post('/convertFile', upload.single('file'),  (req, res, next)=> {
    try {
        if (!req.file) {
            return res.status(400).json({
                message:"bsdk file toh upload kar"
            });
            

        }
        //defining outpath path
        let outputPath=path.join(__dirname,"files",`${req.file.originalname}.pdf`)
        docxC(req.file.path, outputPath,(err,result)=>{
            if(err){
              console.log(err);
              return res.status(500).json({
                message:"nhi ho rha" 
              });
            }
            res.download(outputPath,()=>{
                console.log("file download ho gyi hai teri")
            })
            
          });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"nhi ho rha"

        });
      

        
    }
    
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});