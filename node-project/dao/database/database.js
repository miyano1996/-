// 连接数据库
const mongoose = require('mongoose');
// 设置需要连接的数据库地址  数据库名称
// const dbURI = 'mongodb://gmc:Gao916582220@111.231.189.144:27017/fitness';
// const dbURI = 'mongodb://localhost/fitness';
const dbURI = 'mongodb://root:a100_200@dds-bp1bd276dd4cdae4-pub.mongodb.rds.aliyuncs.com:3717';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
// 当数据库连接成功后触发该事件
mongoose.connection.on('connected', function () {
  console.log(dbURI + ' 数据库连接成功！');
});