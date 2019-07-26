
//判断表是否存在
exports.isExisTable = (tableName) => {
   return  `SELECT count(*) FROM sqlite_master WHERE type="table" AND name = ${tableName}` ;
}