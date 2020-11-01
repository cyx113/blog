'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	async index() {
	  // const { ctx } = this;
	  // this.ctx.body = '陈永新';
	  // let sql = `select * from article`
	  // const results = await this.app.mysql.query(sql);
	  // this.ctx.body = results;
	  let body=this.ctx.request.body
	  delete body._csrf;
	  let result = await this.app.mysql.insert('article',body)
	  const insertSuccess = result.affectedRows === 1
	  const insertId = result.insertId
	  this.ctx.body={
	      isScuccess:insertSuccess,
	      insertId:insertId
	  }
	}
	async isetCsrf() {
	  const { ctx } = this
	  ctx.body = {
	    status: 200,
	    csrf: ctx.csrf
	  }
	}
	async updateArticle(){
	  let tmpArticle= this.ctx.request.body;
	  delete tmpArticle._csrf;
	  const result = await this.app.mysql.update('article', tmpArticle);
	  const updateSuccess = result.affectedRows === 1;
	  this.ctx.body={
	      isScuccess:updateSuccess
	  }
	} 
  	//删除文章
	async delArticle(){
	    let id = this.ctx.params.id
	    const res = await this.app.mysql.delete('article',{'id':id})
	    this.ctx.body={data:res}
	}
	//获得文章列表
	async getArticleList(){
	     let sql =  `select article.id,article.title,FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime,type.typeName from article,type where article.typeId=type.orderNum`
	    const resList = await this.app.mysql.query(sql)
	    this.ctx.body={list:resList}
	} 
	//根据文章ID得到文章详情，用于修改文章
	async getArticleById(){
    	let id = this.ctx.params.id
    	let sql =  `select article.id,article.typeid,article.title,article.articleCointent,article.introduce,FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime,type.typeName from article,type where article.typeId=type.orderNum and article.id='${id}'`
	    const resList = await this.app.mysql.query(sql)
	    this.ctx.body={list:resList}
    }
}

module.exports = HomeController;