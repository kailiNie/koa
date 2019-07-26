//查询商品列表

const Router = require('koa-router');
var router = new Router();

//查询商品
router.post('/erp/goods/list', async (ctx, next) => {
    ctx.body ={
        'message':'查询列表成功', 
        status : 100,//状态100代表成功
    }
});






module.exports = router;
 