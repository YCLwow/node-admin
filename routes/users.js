var express = require('express');
var router = express.Router();
// 生成工具
var jwt = require('jsonwebtoken');

const constant = require('../constant/constant')
const jwtAuth = require('../middleware/middleware')
const connection = require('../middleware/mysql')

connection.connect()

router.use(jwtAuth)

router.use((req, res, next) => {
  // 路由执行之前必须执行中间件
  console.log('this is a request')
  next()
})

// 登陆功能
router.post('/prod/user/login', function (req, res, next) {
  const tokenObj = req.body
  console.log(req.body)
  // 查询语句
  let sql = 'select count(id) sum from user where username=? and password=?'
  // 查询关键字
  let where_value = [tokenObj.name, tokenObj.password]
  connection.query(sql, where_value, function (err, result) {
    console.log(JSON.parse(JSON.stringify(result)))
    if (err) {
      console.log('[SELECT ERROR]:', err.message);
    }
    if (JSON.parse(JSON.stringify(result))[0] === 1) {
      // 用户登录成功过后生成token返给前端
      let token = jwt.sign(tokenObj, constant.secreKey, {
        expiresIn: 60 * 60 * 24 // 授权时效24小时
      })
      res.json({
        code: 200,
        msg: 'ok',
        data: {
          token: token
        }
      })
    } else {
      res.json({
        code: 200,
        msg: 'ok',
        data: {
          error: '请仔细核对用户名和密码'
        }
      })
    }
  })
})

router.post('/prod/user/register', function (req, res, next) {
  console.log('注册信息', req.body)

})

module.exports = router;