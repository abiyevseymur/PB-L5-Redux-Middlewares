import { LOAD_POST_DATA,  REQUEST_BEGIN_POSTS } from "../constants/constants";

const initialState = {
    posts:[],
    isLoading:false
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POST_DATA:
            return {
                ...state,
                posts:action.payload,
                isLoading:false
            }
        case REQUEST_BEGIN_POSTS:
            return {
                ...state,
                isLoading:true
            }
        default:
            return state
    }
}
