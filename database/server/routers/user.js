const { controller, get, post, put } = require('../lib/decorator');
 

@controller('/erp/user/login')
export class loginController {
    @get('/')
    async getLogin (ctx,next) {
        ctx.body =  {
            status :100,
            data : '登陆成功',
            message:'登陆成功'
        }
   }
}