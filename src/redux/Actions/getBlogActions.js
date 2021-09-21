import * as actionTypes from "./actionTypes";

export function getBlog(blog){

    return{type:actionTypes.GET_BLOG_SUCCESS,
        payload:blog}
}
