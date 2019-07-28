--创建数据库初始化执行,仅仅执行一次 
DROP TABLE IF EXISTS t_erp_user_account;
CREATE TABLE t_erp_user_account (
   ObjectId            INTEGER  not null primary key AUTOINCREMENT,
   Account             TEXT,
   password            TEXT
);
 
 
DROP TABLE IF EXISTS t_erp_goods;

CREATE TABLE t_erp_goods (
    id       INTEGER NOT NULL
                     PRIMARY KEY AUTOINCREMENT,-- 手机Id 归属哪个ID 型号
    type     INTEGER,
    typename TEXT,
    name     TEXT-- 名字
);


DROP TABLE IF EXISTS t_erp_goods_details;
CREATE TABLE t_erp_goods_details (
   ObjectId            INTEGER  not null primary key AUTOINCREMENT, --objectId
   id                  INTEGER  , --手机Id 归属哪个ID 型号
   name                 TEXT,
   sq                  TEXT UNIQUE, --手机型号简写 唯一值
   img                 TEXT--图片
);
 