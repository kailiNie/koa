import { async } from 'q';

 
var sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./erp.db');

 export const getAllGoods = async () => {
    var sql = `select * from t_erp_goods`;
    return new Promise((resolve,reject) => {
        db.all(sql,async (err,rows)=> {

          if(err) reject('出现错误')
          else resolve(rows);
        });
    })
}

 export const addGood = async (name) =>{
   console.log(name);
  return new Promise((resolve,reject) => {
    db.all(`insert into t_erp_goods (type, typename, name) values(?, ?, ?)`, ['1', '手机', name],
      (err,rows)=>{
        if(err) reject('出现错误')
          else resolve(rows);
      }) 
 
  })
 
 }

 