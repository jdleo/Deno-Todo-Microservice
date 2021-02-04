import React, { useState, useEffect } from 'react';
import './App.css';

import { createPost, deletePost, getPosts } from './adapters';

import {
    Typography,
    TextField,
    Button,
    Card,
    CardActions,
    CardContent,
    makeStyles,
} from '@material-ui/core';

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
    const [todos, setTodos] = useState([]);

    // component did mount
    useEffect(() => {
        // download existing todos
        (async () => setTodos(await getPosts()))();
    }, []);

    // to handle new todo
    const handleNewTodo = async () => {
        // make sure there is text content
        if (text.trim() !== '') {
            // create new todo
            await crea;
        }
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
            >
                Create
            </Button>
            <div style={{ marginTop: 20 }}>
                {todos.map(todo => (
                    <Card
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
                            <Button size="small" variant="contained" color="secondary">
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
