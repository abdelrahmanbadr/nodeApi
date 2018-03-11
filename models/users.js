// exports.list = 'SELECT name,email from users';
// exports.store = 'INSERT INTO users set ?';
var db=require('../mysqlConnecion'); 
 
var user={
 
getAllusers:function(callback){
 
return db.query("Select name,email from users",callback);
 
},
 getuserById:function(id,callback){
 
return db.query("select * from users where Id=?",[id],callback);
 },
 adduser:function(user,callback){
 return db.query("Insert into users values(?,?)",[user.name,user.email],callback);
 },
 deleteuser:function(id,callback){
  return db.query("delete from users where Id=?",[id],callback);
 },
 updateuser:function(id,user,callback){
  return db.query("update users set Title=?,Status=? where Id=?",[user.Title,user.Status,id],callback);
 }
 
};
 module.exports=user;