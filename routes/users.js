var express = require('express');
var router = express.Router();
// 生成工具
var jwt = require('jsonwebtoken');

const constant = require('../constant/constant')

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
