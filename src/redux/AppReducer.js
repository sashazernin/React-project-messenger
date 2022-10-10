import {getAuthTC} from "./AuthReducer";

let set_initialized = 'set_initialized'

let InitialState = {
    initialized: false,
}

const AppReducer = (state = InitialState, action) => {

    switch (action.type) {
        case set_initialized: {
            return {
                ...state,
                initialized: true
            }
        }
        default :
            return state
    }
}

export const setInitialized = () => {
    return {
        type: set_initialized,
    }
}

export const initializeApp = () => dispatch => {
    try {
        let promise = dispatch(getAuthTC())
        promise.then(() => {
                dispatch(setInitialized())
            }
        )
    } catch (error) {
        alert('server error')
    }
}

export default AppReducer