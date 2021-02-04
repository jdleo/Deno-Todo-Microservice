import axios from 'axios';

export default async function (text: string) {
    // create new todo item
    const response = await axios.post('http://localhost:3001/todos', { text });
    return response.data;
}
