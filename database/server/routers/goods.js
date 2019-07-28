 

const { controller, get, post, put } = require('../lib/decorator');
 const {getAllGoods,addGood} = require('../services/goods')
 
@controller('/erp/goods')
export class goodsListController {
     @get('/goodsList')
     async getGoodsList (ctx,next) {
     await getAllGoods().then(item =>{
         ctx.body =  {
             status :100,
             data : item
         }
     }) 
    }
    //添加商品
    @post('/addGood')
     async addGood (ctx,next) {
      const {name}  = ctx.request.body;
    
        
     await addGood(name).then(item =>{
         ctx.body =  {
             status :100,
             data : item
         }
     })
}
}