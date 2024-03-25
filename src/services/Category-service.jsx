import { myAxios } from "./Helper";

export const loadAllCategories = () => {
    return myAxios.get("/category/").then(resp => {return resp.data});
}