import {myAxios} from './Helper';

export const signup = (user) => {
    return myAxios.post('/auth/register', user)
    .then((response) => response.data);
}

export const login = (user) => {
    return myAxios.post('/auth/login', user)
    .then((response) => response.data);
}