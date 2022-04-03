import axios from 'axios';

export function allUsers() {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}

export function saveUser( params ){
    return axios.post('https://jsonplaceholder.typicode.com/users',params);
}