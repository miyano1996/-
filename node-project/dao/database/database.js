// 连接数据库
const mongoose = require('mongoose');
<<<<<<< HEAD
// 设置需要连接的数据库地址  数据库名称
const dbURI = 'mongodb://localhost/fitness';
=======
// 设置需要连接的数据库地址
const dbURI = 'mongodb://111.231.189.144:27017/fitness';
//若需连接本地可以把路径设置:可选路径
//111.231.189.144:27017
//localhost
>>>>>>> master
// 连接数据库
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
// 当数据库连接成功后触发该事件
mongoose.connection.on('connected', function() {
  console.log(dbURI + ' 数据库连接成功！');
});