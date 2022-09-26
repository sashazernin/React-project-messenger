import {AuthApi, getAuth} from "./api";


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
                isAuth: action.isAuth
            }
        }
        default : return state
    }
}

export const setAuthUserData = (userId,email,login,isAuth) => {
    return{
        type: set_User_Data,
        userId,
        email,
        login,
        isAuth
    }
}

export const getAuthTC = () => dispatch => {
    return getAuth().then(
        data => {
            if(data.resultCode === 0){
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login,true))
            }
        }
    )
}

export const login = (email,password,rememberMe,setError) => {
    return (dispatch) => {
        AuthApi.login(email,password,rememberMe,true).then(
            data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthTC())
                }
                else {
                    setError('server', {
                        message: data.messages
                    })
                }
            }
        )
    }
}

export const logout = () => dispatch => {
    AuthApi.logout().then(
        data => {
            if(data.resultCode === 0){
                dispatch(setAuthUserData(null,null,null,false))
            }
            else{
            }
        }
    )
}

export default AuthReducer