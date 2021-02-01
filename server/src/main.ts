import { Application } from 'https://deno.land/x/oak/mod.ts';

// new app instance
const app = new Application();

app.use(ctx => {
    ctx.response.body = { hello: 'world' };
});

await app.listen({ port: 3001 });
