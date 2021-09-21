
import initialState from "./initialState";
import * as actionTypes from "../Actions/actionTypes";


export function getBlogReducer(state=initialState.currentBlog, action){

     switch (action.type){

         case actionTypes.GET_BLOG_SUCCESS:
             return action.payload
         default :
             return state;


     }

}
