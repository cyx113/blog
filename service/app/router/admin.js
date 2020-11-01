module.exports = app =>{
    const {router,controller} = app
    router.post('/admin/index',controller.admin.home.index);
    router.get('/admin/isetCsrf',controller.admin.home.isetCsrf);
    router.post('/admin/updateArticle',controller.admin.home.updateArticle);
    router.get('/admin/delArticle/:id',controller.admin.home.delArticle)
    router.get('/admin/getArticleList',controller.admin.home.getArticleList);
    router.get('/admin/getArticleById/:id',controller.admin.home.getArticleById);
}