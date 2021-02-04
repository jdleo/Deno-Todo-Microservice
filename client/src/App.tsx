import React, { useState, useEffect } from 'react';
import './App.css';

import { createTodo, deleteTodo, getTodos } from './adapters';

import {
    Typography,
    TextField,
    Button,
    Card,
    CardActions,
    CardContent,
    makeStyles,
} from '@material-ui/core';
import { ITodo } from './models';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function App() {
    // state mgmt
    const [text, setText] = useState('');
    const [todos, setTodos] = useState<ITodo[] | []>([]);

    // helper method to retrieve todos
    const retrieveTodos = async () => {
        // reload todos
        const res = await getTodos();
        setTodos(res.data);
    };

    // component did mount
    useEffect(() => {
        // download existing todos
        retrieveTodos();
    }, []);

    // to handle new todo
    const handleNewTodo = async () => {
        // make sure there is text content
        if (text.trim() !== '') {
            // create new todo
            await createTodo(text);
            // reload todos
            retrieveTodos();
            // clear text field
            setText('');
        }
    };

    // to handle delete todo
    const handleDeleteTodo = async (id: string) => {
        // delete  todo
        await deleteTodo(id);
        // reload todos
        retrieveTodos();
    };

    const classes = useStyles();

    return (
        <div className="App">
            <Typography variant="h4">Create Todo Item</Typography>
            <TextField
                style={{ marginTop: 20, maxWidth: '50%' }}
                id="outlined-multiline-static"
                label="New Todo Item"
                value={text}
                onChange={e => setText(e.target.value)}
                multiline
                rows={3}
                variant="outlined"
                fullWidth
            />
            <br />
            <Button
                size="large"
                variant="contained"
                color="primary"
                style={{ marginTop: 20, maxWidth: '50%' }}
                fullWidth
                onClick={() => handleNewTodo()}
            >
                Create
            </Button>
            <div style={{ marginTop: 20 }}>
                {/** @ts-expect-error */}
                {todos.map((todo: ITodo) => (
                    <Card
                        key={todo._id}
                        className={classes.root}
                        variant="outlined"
                        style={{ marginLeft: '25%', width: '50%', marginTop: 20 }}
                    >
                        <CardContent>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                {new Date(todo.created_at).toLocaleString()}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {todo.text}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                variant="contained"
                                color="secondary"
                                onClick={() => handleDeleteTodo(todo._id)}
                            >
                                delete
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default App;
