import axios from 'axios';

export function getTodos( idUser ) {
    return axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${ idUser }`);
}
