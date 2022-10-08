import {AuthApi, getAuth, SecurityAPI} from "./api";

const set_User_Data = 'set_User_Data'
const set_Captcha_Url = 'set_Captcha_Url'

let InitialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    loading: false,
    captchaUrl: null,
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
        case set_Captcha_Url: {
            return {
                ...state,
                captchaUrl: action.url
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
export const setCaptchaUrl = (url) => {
    return {
        type: set_Captcha_Url,
        url
    }
}

export const getAuthTC = () => async dispatch => {
    const response = await getAuth()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe, captcha, setError) => async dispatch => {
    const response = await AuthApi.login(email, password, rememberMe, captcha)
    switch (response.data.resultCode) {
        case 0: {
            if(captcha != null){
                dispatch(setCaptchaUrl(null))
            }
            dispatch(getAuthTC())
        }break
        case 10: {
                const response = await SecurityAPI.getCaptcha()
                dispatch(setCaptchaUrl(response.data.url))
                setError('captcha', {
                    message: response.data.messages
                })
        }break
        default: {
            setError('server', {
                message: response.data.messages
            })
        }
    }
}

export const logout = () => async dispatch => {
    const response = await AuthApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default AuthReducer