import axios from 'axios';
export const CREATE_USER = 'create_user';
export const LOGIN_USER = 'login_user';
const ROOT_URL = 'http://localhost:8000/api';


export function createProUser(values, callback) {
    const request = axios.post(`${ROOT_URL}/register/`, values)
        .then(() => callback()); 

    return{
        type: CREATE_USER,
        payload: request
    };
}

export function loginUser(values, callback) {
    const request = axios.post(`${ROOT_URL}/login/`, values)
        .then((response) => console.log(response.data.token)); 

    return{
        type: LOGIN_USER,
        payload: request
    };
}
