const Koa = require('koa');
const app = new Koa;
app.use(async(ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, Koa2</h1>'
});
app.listen(3300);
console.log('app startd at port 3300');
