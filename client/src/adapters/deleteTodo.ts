import axios from 'axios';

export default async function (id: string) {
    // delete todo item
    const response = await axios.delete('http://localhost:3001/todos/');
    return response.data;
}
