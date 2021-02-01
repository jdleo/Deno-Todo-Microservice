import { MongoClient } from 'https://deno.land/x/mongo@v0.21.0/mod.ts';
import TodoSchema from '../model/Todo.ts';

// create client
const client = new MongoClient();

// get credentials from environment
const USER = Deno.env.get('MONGODB_ADMINUSERNAME');
const PASS = Deno.env.get('MONGODB_ADMINPASSWORD');

// connect to MongoDB
await client.connect(`mongodb://${USER}:${PASS}@mongo:27017`);

// database ref
const db_name: string = 'todos';
const db = client.database(db_name);

// register schema with Mongo
const Todo = db.collection<TodoSchema>('todo');

export { db, Todo };
