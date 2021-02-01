import { Todo, Bson } from '../db/mod.ts';

const deleteTodo = async (ctx: any) => {
    try {
        // attempt to get id from ctx params
        let todoId: string = ctx.params.id;

        // attempt to delete by ID in mongoDB
        const deleted = await Todo.deleteOne({ _id: new Bson.ObjectID(todoId) });
        // send created response back
        ctx.response.body = { status: deleted > 0, data: deleted };
        ctx.response.status = 200;
    } catch (err) {
        ctx.response.body = { status: false, data: null };
        ctx.response.status = 500;
        console.error(err);
    }
};

export default deleteTodo;
