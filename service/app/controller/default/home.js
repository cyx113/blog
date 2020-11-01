'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const { ctx } = this;
    
    let sql = `select * from type`

    const results = await this.app.mysql.query(sql);
    this.ctx.body = results;
  }
  //获得文章列表
	async getArticleList(){
	     let sql =  `select article.id,article.title,article.articleCointent,article.viewCount,FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime,type.typeName from article,type where article.typeId=type.orderNum`
	    const resList = await this.app.mysql.query(sql)
	    this.ctx.body={list:resList}
	} 
	//获得文章列表有id
	async getArticleListID(){
		let id = this.ctx.params.id
	     let sql =  `select article.id,article.title,article.articleCointent,article.viewCount,FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime,type.typeName from article,type where article.typeId=type.orderNum and article.typeId='${id}'`
	    const resList = await this.app.mysql.query(sql)
	    this.ctx.body={list:resList}
	} 
	//根据文章ID得到文章详情，用于修改文章
	async getArticleById(){
    	let id = this.ctx.params.id
    	let sql =  `select article.id,article.typeid,article.title,article.viewCount,article.introduce,FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime,type.typeName from article,type where article.typeId=type.orderNum and article.id='${id}'`
	    const resList = await this.app.mysql.query(sql)
	    this.ctx.body={list:resList}
    }
}

module.exports = HomeController;
