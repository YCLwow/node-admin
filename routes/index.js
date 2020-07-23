var express = require('express');
var router = express.Router();
// 生成工具
var jwt = require('jsonwebtoken');

const constant = require('../constant/constant')
const jwtAuth = require('../middleware/middleware')

router.use(jwtAuth)

router.use((req, res, next) => {
  // 路由执行之前必须执行中间件
  console.log('this is a request')
  next()
})
router.post('/prod/auth/login', function (req, res, next) {
  const tokenObj = req.body
  console.log(constant.secreKey)
  // 用户登录成功过后生成token返给前端
  let token = jwt.sign(tokenObj, constant.secreKey, {
    expiresIn: 60 * 60 * 24 // 授权时效24小时
  });
  res.json({
    code: 200,
    msg: 'ok',
    data: {
      token: token
    }
  })
});

module.exports = router;
