const Koa = require('koa');
const app = new Koa();

// logger
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
})

// x-reponse-time
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
})

// reponse
app.use(async ctx => {
    console.log(ctx, '2222222')
    ctx.body = {
        success: true,
        code: 0,
        data: 'Hello World!',
    };
})

app.listen(3000);