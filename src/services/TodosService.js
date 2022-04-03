import axios from 'axios';

export function getTodos( idUser ) {
    return axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${ idUser }`);
}

export function saveTodo( params ){
    return axios.post('https://jsonplaceholder.typicode.com/todos',params);
}

export function updateTodo( params ){
    return axios.put(`https://jsonplaceholder.typicode.com/todos/${ params.id }`,params);
}

export function deleteTodo( idTodo ){
    return axios.delete(`https://jsonplaceholder.typicode.com/todos/${ idTodo }`);
}