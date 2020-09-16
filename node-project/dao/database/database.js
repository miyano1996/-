// 连接数据库
const mongoose = require('mongoose');
// 设置需要连接的数据库地址
const dbURI = 'mongodb://localhost/fitness';
// 连接数据库
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
// 当数据库连接成功后触发该事件
mongoose.connection.on('connected', function() {
  console.log(dbURI + ' 数据库连接成功！');
});