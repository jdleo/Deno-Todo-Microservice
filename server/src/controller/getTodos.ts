import { Todo, Bson } from '../db/mod.ts';

const getTodos = async (ctx: any) => {
    try {
        // get all douments, sorted by created_at field
        const todos = await Todo.find().sort({ created_at: -1 }).toArray();
        // send created response back
        ctx.response.body = { status: todos !== undefined, data: todos };
        ctx.response.status = 200;
    } catch (err) {
        ctx.response.body = { status: false, data: null };
        ctx.response.status = 500;
        console.error(err);
    }
};

export default getTodos;
