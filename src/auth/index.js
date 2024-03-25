export const isLoggedIn = () => {
    let data = localStorage.getItem('data');
    if (data) {
        return true;
    } else {
        return false;
    }
} 

export const doLogin = (data, next) => {
    localStorage.setItem('data', JSON.stringify(data));
    next();
}

export const doLogout = (next) => {
    localStorage.removeItem('data');
    next();
}

export const getCurrentUserDetails = () => {
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem('data'))?.userDto;
    } else {
        return undefined;
    }
}

export const getToken = () => {
    // let userData = JSON.parse(localStorage.getItem("data"));
    // userData.token = token;
    // localStorage.setItem("data",JSON.stringify(userData))

    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem('data')).jwtToken;
    }else{
        return null;
    }
}