var express = require("express")
var router = express.Router()
//引入数据库包
var db = require("./db.js")

/**
 * 查询列表页
 */
router.post("/", function(req, res) {
  var name = req.body.uname
  var pwd = req.body.upwd
  db.query("select * from login", function(err, rows) {
    if (err) {
      res.send('没有数据')
    } else {
      for (var item of rows) {
        if(name == item.uname && pwd == item.upwd) {
          res.send('1')
        } else {
          res.send('0')
        }
      }
    }
  })
})

module.exports = router
