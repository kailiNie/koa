 
var sqlite3 = require('sqlite3').verbose();
const {isExisTable} = require('../table')
const db = new sqlite3.Database('./erp.db');
//连接数据库
exports.connect = () =>{
    db = new sqlite3.Database('./erp.db');
}

//查询商品列表
// exports.getGoodsList = () =>{
   
//     db.serialize(function() {
//         var sql = `select * from t_erp_goods`
//         var result = db.all(sql,(err,rows)=>{
//             console.log(rows);
//         });
 
//     });
// }

//关闭数据库
exports.close = () => {
    db.close();
}