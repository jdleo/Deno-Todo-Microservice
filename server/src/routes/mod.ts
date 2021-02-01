import { Router } from 'https://deno.land/x/oak/mod.ts';
import { createTodo, getTodo } from '../controller/mod.ts';

// new router instance
const router = new Router();

// set up routes
router
    .get('/', ctx => {
        ctx.response.body = { status: 'available' };
    })
    .post('/todos', createTodo)
    .get('/todos/:id', getTodo);

export default router;
