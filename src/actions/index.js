import { LOAD_USER_DATA, LOAD_POST_DATA, REMOVE_DATA, REQUEST_BEGIN_USERS, REQUEST_BEGIN_POSTS } from "../constants/constants";
import jsonplaceholder from "../api/jsonplaceholder";

//task 1
export const loadUser = () => dispatch => {
    jsonplaceholder.get("/users")
        .then((response) =>
            dispatch({
                type: LOAD_USER_DATA,
                payload: response.data
            }))
    dispatch({ type: REQUEST_BEGIN_USERS })
}
export const loadPosts = () => dispatch => {

    jsonplaceholder.get("/posts")
        .then((response) =>
            dispatch({
                type: LOAD_POST_DATA,
                payload: response.data
            }))
    dispatch({ type: REQUEST_BEGIN_POSTS })
}

export const removeRow = (id) => dispatch => {
    dispatch({
        type: REMOVE_DATA,
        payload: id
    })
}

//count each dispatched actions
export const countEachAct = (_, count = 0) => next => action => {
    count++;
    console.log(`dispatch (${action.type}) - ${count}`)
    return next(action)
}


//'mutes' each odd action
export const muteOddAct = (store, count = 0) => next => action => {
    count++;
    if (count % 2 === 0) {
        return next(action)
    }
}

//dublicate each action twice
export const doubleAct = store => next => action => {
    store.dispatch(action)
    next(action)
}