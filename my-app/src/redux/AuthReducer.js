import {getAuth} from "./api";


let set_User_Data = 'set_User_Data'

let InitialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    loading: false
}

const AuthReducer = (state = InitialState, action) => {

    switch (action.type){
        case set_User_Data: {
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                login: action.login,
                isAuth: true
            }
        }
        default : return state
    }
}

export const setAuthUserData = (userId,email,login) => {
    return{
        type: set_User_Data,
        userId,
        email,
        login
    }
}

export const getAuthTC = () => {
    return (dispatch) => {
        getAuth().then(
            data => {
                if(data.resultCode === 0){
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            }
        )
    }
}

export default AuthReducer