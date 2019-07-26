 
var sqlite3 = require('sqlite3').verbose();
const {isExisTable} = require('./table')
 //打开表 如果没有就创建表
 var db = new sqlite3.Database('./erp.db');
//连接数据库
exports.connect = () =>{

 
   //确保有顺序的自信下面语句
    db.serialize(function() {
     
        

        //判断是否存在表没有就创建
        db.run("CREATE TABLE lorem (info TEXT)");
   
        var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        for (var i = 0; i < 10; i++) {
            stmt.run("Ipsum " + i);
        }
        stmt.finalize();
   
    db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
        console.log(row.id + ": " + row.info);
    });
  });
   
  db.close();
}