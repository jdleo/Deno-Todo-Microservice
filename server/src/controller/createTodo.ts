import { Todo } from '../db/mod.ts';

const createTodo = async (ctx: any) => {
    try {
        // attempt to parse json body
        let body: any = await ctx.request.body();
        const { text } = await body.value;

        // insert document into db
        const id = await Todo.insertOne({
            text,
            created_at: Date.now(),
        });

        // send created response back
        ctx.response.body = { status: true, data: id };
        ctx.response.status = 201;
    } catch (err) {
        ctx.response.body = { status: false, data: null };
        ctx.response.status = 500;
        console.error(err);
    }
};

export default createTodo;
