import { Router } from 'https://deno.land/x/oak/mod.ts';
import { createTodo, getTodo, updateTodo, deleteTodo, getTodos } from '../controller/mod.ts';

// new router instance
const router = new Router();

// set up routes
router
    .get('/', ctx => {
        ctx.response.body = { status: 'available' };
    })
    .post('/todos', createTodo)
    .get('/todos', getTodos)
    .get('/todos/:id', getTodo)
    .put('/todos/:id', updateTodo)
    .delete('/todos/:id', deleteTodo);

export default router;
