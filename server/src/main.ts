import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { oakCors } from 'https://deno.land/x/cors/mod.ts';
import router from './routes/mod.ts';

const app = new Application();

const PORT = 3001;

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: PORT });
