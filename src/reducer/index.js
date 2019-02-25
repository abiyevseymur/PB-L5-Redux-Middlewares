import { combineReducers } from 'redux'
import { postReducer } from './postReducer'
import { userReducer } from './userReducer'
import { doubleAct } from '../actions';


export const rootReducer = combineReducers({
    posts: postReducer,
    users: userReducer,
    dublicate: doubleAct
})