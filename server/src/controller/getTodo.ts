import { Todo, Bson } from '../db/mod.ts';

const getTodo = async (ctx: any) => {
    try {
        // attempt to get id from ctx params
        let todoId: string = ctx.params.id;

        // attempt to lookup by ID in mongoDB
        const todo = await Todo.findOne({ _id: new Bson.ObjectID(todoId) });
        // send created response back
        ctx.response.body = { status: todo !== undefined, data: todo };
        ctx.response.status = 200;
    } catch (err) {
        ctx.response.body = { status: false, data: null };
        ctx.response.status = 500;
        console.error(err);
    }
};

export default getTodo;
