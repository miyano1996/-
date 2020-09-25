const expressJWT = require('express-jwt');
const { KEY } = require('./consts.js'); //密钥会多次用到  封装为常量减少出错

const jwtAuth = expressJWT({
    secret: KEY, // 对应着生成 token 时的密钥字符串
    algorithms: ['HS256'],
    credentialsRequired: true
}).unless({
    // 配置不需要 token 验证的 url 路径  
    path: ['/admin/login', '/gym/register', '/gym/login','/students/login','/students/reg','/coaches/login','/coaches/reg','/images/upload','/gym/sendCheckCode','/gym/changePassword','/gym/clearCheckCode','/gym/getGymByText',]
});

module.exports = jwtAuth;