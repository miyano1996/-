var express = require('express');
var router = express.Router();

const {uploadFiles} = require('../util/handleFiles');

/* GET home page. */
router.post('/upload',function(req, res, next) {
    const upload = uploadFiles({
        path:'./public/temp'
    });
    upload(req,res,(err)=>{
        console.log(req.files[0]);
        if(err){
            console.log('图片上传失败',err);
        }else{
            console.log('图片上传成功');
            res.send({
                msg:'图片上传成功',
                success:true,
                filename:req.files.map(item=>item.filename)
            })
        }
    })
});

module.exports = router;