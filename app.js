const Koa = require('koa');
const router = require('koa-router')();

const app = new Koa();

app.use(async (ctx, next) => {
   console.log(`Process ${ctx.require.method} ${ctx.require.url}...`);
   await next();
});

router.get('/hello/:name', async (ctx, next) => {
   var name = ctx.param.name;
   ctx.response.body = `<h1>Hello, ${mame}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>`
});

app.use(router.routes());

app.listen(3300);
console.log('app startd at port 3300');
