module.exports = (router, productsLoader) => {

    /* Start of Categories */
    /**/
    /* router.get('/merchandise', async ctx => {
         const products = await productsLoader.merchandise();
         ctx.state.model = {
             title: 'merchandise',
         }
         await ctx.render('/products/merchandise', { products: products });
     })*/
    /* End of Categories */

    /* Other Pages */
    router.get('/', async ctx => {
        ctx.state.model = {
            title: 'Home',
        }
        await ctx.render('home');
    })
}