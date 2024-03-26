import { myAxios, privateAxios } from "./Helper";

export const createPost = (postData) => {
    // console.log(postData)
    return privateAxios.post(`/user/${postData.userId}/category/${postData.categoryId}/post`, postData)
       .then((response) => response.data);
}

export const getAllPosts = () => {
    return myAxios.get('/posts')
       .then((response) => response.data);
}

export const getPost = (id) => {
    return myAxios.get(`/post/${id}`)
       .then((response) => response.data);
}

export const getPostsByUser = (userId) => {
    return privateAxios.get(`/user/${userId}/post`)
        .then((response) => response.data);
}