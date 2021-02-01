import { Todo, Bson } from '../db/mod.ts';

const updateTodo = async (ctx: any) => {
    try {
        // attempt to get body from ctx
        const body: any = await ctx.request.body();
        // attempt to get id from ctx params
        let todoId: string = ctx.params.id;

        // attempt to lookup by ID in mongoDB
        const todo = await Todo.updateOne({ _id: new Bson.ObjectID(todoId) }, { $set: body });
        // send created response back
        ctx.response.body = { status: todo !== undefined, data: todo };
        ctx.response.status = 200;
    } catch (err) {
        ctx.response.body = { status: false, data: null };
        ctx.response.status = 500;
        console.error(err);
    }
};

export default updateTodo;
