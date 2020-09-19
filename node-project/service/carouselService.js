const {upCarousel} = require('../dao/carouselDao');

module.exports.upCarousel = async data=>{
    const obj = await upCarousel(data);
    if(obj._id){
        return {success:true,msg:'上传成功',rows:obj}
    }
    return {success:false,msg:'上传失败',rows:obj}
}