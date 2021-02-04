import axios from 'axios';

export default async function () {
    // download existing todo items
    const response = await axios.get('http://localhost:3001/todos');
    return response.data;
}
