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
	port:'3006'         //端口号
});


//message 遍历
function getAllMes(callback){
	pool.getConnection(function(err,connection){
	var getAllMes_Sql = 'select * from mes';
		connection.query(getAllMes_Sql,function(err,result){
			if(err){
				console.log("getAllMes Error:" + err.message);
				return;
			}
			callback(err,result);
		});
	});
};
//遍历投诉
function getAllComplaint(callback){
	pool.getConnection(function(err,connection){
	var getAllTou_Sql = 'select * from complaint';
		connection.query(getAllTou_Sql,function(err,result){
			if(err){
				console.log("getAllComplaint Error:" + err.message);
				return;
			}
			callback(err,result);
		});
	});
};
//遍历新闻
function getAllNew(callback){
	pool.getConnection(function(err,connection){
	var getAllNew_Sql = 'select * from new';
		connection.query(getAllNew_Sql,function(err,result){
			if(err){
				console.log("getAllNew Error:" + err.message);
				return;
			}
			callback(err,result);
		});
	});
};

//message上传
function baocun(message,phone,uname,callback){
	pool.getConnection(function(err,connection){
		var insertUser_Sql = "insert into mes(id,message,phone,uname) values(0,?,?,?)";
		connection.query(insertUser_Sql,[message,phone,uname],function(err,result){
			if(err){
				console.log("getUserByName Error: "+err.message);
				return;
			}
			console.log("involed[getUserByName]");
			callback(err,result)
		});
	});
};
//投诉上传
function save(content,tel,name,callback){
	pool.getConnection(function(err,connection){
		var insertTou_Sql = "insert into complaint(id,content,tel,name) values(0,?,?,?)";
		connection.query(insertTou_Sql,[content,tel,name],function(err,result){
			if(err){
				console.log("getUserByName Error: "+err.message);
				return;
			}
			console.log("involed[getUserByName]");
			callback(err,result)
		});
	});
};

//新闻上传
function keep(title,content,date,callback){
	pool.getConnection(function(err,connection){
		var insertNew_Sql = "insert into new(id,title,content,date) values(0,?,?,?)";
		connection.query(insertNew_Sql,[title,content,date],function(err,result){
			if(err){
				console.log("getUserByName Error: "+err.message);
				return;
			}
			console.log("involed[getUserByName]");
			callback(err,result)
		});
	});
};
//id获取
function getAllId(id,callback){
	pool.getConnection(function(err,connection){
		var getUseId_sql = 'SELECT * FROM new WHERE id = ?';
		connection.query(getUseId_sql,[id],function(err,result){
			if(err){
				console.log("getAllId Error:" + err.message);
				return;
			}
			callback(err,result);
		});
	});
};
//新闻删除
function deleteInfo(id,callback){
	pool.getConnection(function(err,connection){
		var shanChu_sql = 'delete from new where id = ?';
		connection.query(shanChu_sql,[id],function(err,result){
			if(err){
				console.log("getUserByName Error: "+err.message);
				return;
			}
			console.log("involed[getUserByName]");
			callback(err,result)
		})
	})
}
//id查询
function getAllId(id,callback){
	pool.getConnection(function(err,connection){
		var getUseId_sql = 'SELECT * FROM new WHERE id = ?';
		connection.query(getUseId_sql,[id],function(err,result){
			if(err){
				console.log("getAllId Error:" + err.message);
				return;
			}
			callback(err,result);
		});
	});
};

function getUserByName(uname,callback){
	pool.getConnection(function(err,connection){
		var getUserByName_Sql = "SELECT * FROM user WHERE uname = ?";
		connection.query(getUserByName_Sql,[uname],function(err,result){
			if(err){
				console.log("getUserByName Error: "+err.message);
				return;
			}
			console.log("involed[getUserByName]");
			callback(err,result)
		});
	});
};
//message获取
router.post('/mes',function(req,res){
	console.log('mes in server......');
	getAllMes(function(err,results){
		if(err){
			res.send(err);
		}else if(results){
			res.send(results);
		}
	})
})
//投诉获取
router.post('/tou',function(req,res){
	console.log('tou in server......');
	getAllComplaint(function(err,results){
		if(err){
			res.send(err);
		}else if(results){
			res.send(results);
		}
	})
})
//新闻获取
router.post('/xin',function(req,res){
	console.log('xin in server......');
	getAllNew(function(err,results){
		if(err){
			res.send(err);
		}else if(results){
			res.send(results);
		}
	})
})
//message 提交
router.post('/upload',function(req,res){
	console.log('into post upload......');
	var message = req.body['message'];
	var phone = req.body['phone'];
	var uname = req.body['uname'];
	console.log('>>>>'+message+phone+uname);
	baocun(message,phone,uname,function(err,result){
		if(err){
			res.send({flag:3})
			return;
		}
		if(result.insertId > 0){
			console.log("留言成功");
			result={flag:1};
			res.send(result)
		}else{
			res.send({flag:3})
			return;
		}
	})
})
//投诉提交
router.post('/tousu',function(req,res){
	console.log('into post tousu......');
	var content = req.body['content'];
	var tel = req.body['tel'];
	var name = req.body['name'];
	console.log('>>>>'+content+tel+name);
	save(content,tel,name,function(err,result){
		if(err){
			res.send({flag:3})
			return;
		}
		if(result.insertId > 0){
			console.log("投诉成功");
			result={flag:1};
			res.send(result)
		}else{
			res.send({flag:3})
			return;
		}
	})
})
//新闻上传
router.post('/news',function(req,res){
	console.log('into post news......');
	var title = req.body['title'];
	var content = req.body['content'];
	var date = req.body['date'];
	console.log('>>>>'+title+content+date);
	keep(title,content,date,function(err,result){
		if(err){
			res.send({flag:3})
			return;
		}
		if(result.insertId > 0){
			console.log("新闻成功");
			result={flag:1};
			res.send(result)
		}else{
			res.send({flag:3})
			return;
		}
	})
})
//新闻删除
router.post('/delete',function(req,res){
	var id = req.body['id']
	console.log('delete');
	deleteInfo(id,function(err,results){
		if(err){
			res.send(err);
		}else if(results){
			res.send(results);
		}
	})
})
//id操作
router.get('/text',function(req,res){
	console.log('run in server......');
	var id = req.param('id');
	console.log(id)	
	getAllId(id,function(err,results){
		if(err){
			res.send(err);
		}else if(results){
			res.send(results);
		}
	})
})

//登录login
//router.get('/denglu',function(req,res){
//	res.redirect('/mistake.html');  //重定向
//})
router.post('/denglu',function(req,res){
	console.log('into post login .......');
	var uname = req.body['uname'];
	var pwd = req.body['pwd'];
	console.log('>>>>>'+uname+pwd);
	getUserByName(uname,function(err,result){
		if(result ==null||result ==''){
			console.log('用户名不存在')
			res.send({flag:2});
			return;
		}else{
			for(var i=0;i<=result.length;i++){
				if(result[i].uname == uname && result[i].pwd == pwd){
					console.log('登录成功');
					res.send({flag:1});
//					res.send(result);
					return;
				}else{
					console.log('登录失败');
					res.send({flag:3});
//					res.send(result);
					return;
				}
			}
		}
		
	})
})

module.exports = router;
