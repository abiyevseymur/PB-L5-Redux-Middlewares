import { LOAD_USER_DATA,REMOVE_DATA,  REQUEST_BEGIN_USERS } from "../constants/constants";

const initialState = {
    users:[],
    isLoading:false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER_DATA:
            return {
                ...state,
                users:action.payload,
                isLoading:false
            }
        case REQUEST_BEGIN_USERS:
            return{
                ...state,
                isLoading:true
            }
        case REMOVE_DATA:
            return{
                ...state,
                users:  state.users.filter(s => s.id !== action.payload)
            }
        default:
            return state
    }
}