const crypto = require('crypto');

module.exports = {
  MD5_SUFFIX: 'acc固定盐值',
  // 密码加密
  md5: (pwd) => {
    let mad5 = crypto.createHash('md5')
    return md5.update(pwd).digest('hex')
  },
  // token签发
  secreKey: 'jwt_token'
}