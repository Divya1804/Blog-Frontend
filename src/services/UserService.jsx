import {myAxios} from './Helper';

export const signup = (user) => {
    return myAxios.post('/api/auth/register', user)
    .then((response) => response.data);
}