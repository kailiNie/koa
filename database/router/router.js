const Router = require('koa-router');

// const goodsList = require('./phone')

var router = new Router();

//登录
router.get('/erp/user/login', async (ctx, next) => {
    ctx.body ={
        'message':'登录成功', 
        status : 100,//状态100代表成功
    }
});






module.exports = router;
 