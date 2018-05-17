let fn_hello = async (ctx, next) => {
    let name = ctx.params.body;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};

module.exports = {
    'GET /hello/:name': fn_hello
};