import * as axios from "axios";
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers: {
        "API-KEY": "1423c98e-8f60-4de9-b1b0-4d4e4089c6b1"
    }
})
export const getUsers = (currentPage,pageSize) => {

    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}

export const unfollow = (id) => {
    return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data
        })
}

export const follow = (id) => {
    return instance.post(`follow/${id}`)
        .then(response => {
            return response.data
        }
    )
}

export const getProfileInfo = (id) => {
    console.warn("use the ProfileAPI.getProfileInfo(id)")
    return ProfileAPI.getProfileInfo(id);
}

export const getAuth = () => {
    console.warn('use the AuthApi.getAuth()')
    return AuthApi.getAuth()
}

export const ProfileAPI = {
    getProfileInfo(id) {
        return instance.get(`profile/${id}`)
            .then(responce => {
                return responce.data
            })
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
            .then(responce => {
                return responce.data
            })
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status:status})
            .then(responce => {
                return responce.data
            })
    },
}

export const AuthApi = {
    getAuth(){
        return instance.get('auth/me')
            .then(responce => {
                return responce.data
            })
    },
    login(email,password,rememberMe,captcha){
        console.log(email,password,rememberMe,captcha)
        return instance.post('auth/login', {email,password,rememberMe,captcha})
            .then(responce => {
                return responce.data
            })
    },
    logout(){
        return instance.delete('auth/login')
            .then(responce => {
                return responce.data
            })
    },
    captcha(){
        return instance.get('/security/get-captcha-url')
            .then(responce => {
                return responce.data
            })
    },
}