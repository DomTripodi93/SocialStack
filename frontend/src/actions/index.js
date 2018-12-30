import axios from 'axios';
export const CREATE_USER = 'create_user';
export const USER_TOKEN = 'USER_TOKEN';
const ROOT_URL = 'http://localhost:8000/api';


export function createProUser(values, callback) {
    const request = axios.post(`${ROOT_URL}/register/`, values)
        .then(() => callback()); 

    return{
        type: CREATE_USER,
        payload: request
    };
}

export function getToken(values, callback) {
    const request = axios.post(`${ROOT_URL}/login/`, values)
        .then((response) => console.log(response.data.token)); 

    return{
        type: USER_TOKEN,
        payload: request
    };
}