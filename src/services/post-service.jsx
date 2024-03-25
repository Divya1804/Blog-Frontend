import { privateAxios } from "./Helper";

export const createPost = (postData) => {
    // console.log(postData)
    return privateAxios.post(`/user/${postData.userId}/category/${postData.categoryId}/post`, postData)
       .then((response) => response.data);
}