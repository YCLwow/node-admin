// jwt.js,token中间件
const expressJwt = require("express-jwt");
const constant = require('../constant/constant');

// express-jwt中间件帮我们自动做了token的验证以及错误处理，所以一般情况下我们按照格式书写就没问题，其中unless放的就是你想要不检验token的api。
const jwtAuth = expressJwt({ secret: constant.secreKey, algorithms: ['HS256'] })
  .unless({ path: ["/prod/auth/login", "/api/user/register"] });

module.exports = jwtAuth;