import axios from 'axios';

export function allUsers() {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}
