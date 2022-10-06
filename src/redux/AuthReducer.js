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

    switch (action.type) {
        case set_User_Data: {
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth
            }
        }
        default :
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: set_User_Data,
        userId,
        email,
        login,
        isAuth
    }
}

export const getAuthTC = () => async dispatch => {
    const responce = await getAuth()
    if (responce.data.resultCode === 0) {
        let {id, email, login} = responce.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe, setError) => async dispatch => {
    const responce = await AuthApi.login(email, password, rememberMe, true)
    if (responce.data.resultCode === 0) {
        dispatch(getAuthTC())
    } else {
        setError('server', {
            message: responce.data.messages
        })
    }
}

export const logout = () => async dispatch => {
    const responce = await AuthApi.logout()
            if (responce.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
}

export default AuthReducer