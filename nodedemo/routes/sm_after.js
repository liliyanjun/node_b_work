var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var formidable = require("formidable");
var fs = require("fs");

var pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'199598',  //mysql安装时设置的pwd
	database:'news', 	//数据库名称
	port:'3306'         //端口号
});

function getAllUsers(callback){
	pool.getConnection(function(err,connection){
	var getAllUsers_Sql = 'select * from news';
		connection.query(getAllUsers_Sql,function(err,result){
			if(err){
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			callback(err,result);
		});
	});
};