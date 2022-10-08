import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "430c4704-ed52-491c-869b-7f5e70fb9e75"
    },
})
export const getUsers = (currentPage, pageSize) => {

    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
}

export const unfollow = (id) => {
    return instance.delete(`follow/${id}`)
}

export const follow = (id) => {
    return instance.post(`follow/${id}`)
}

export const getProfileInfo = (id) => {
    console.warn("use the ProfileAPI.getProfileInfo(id)")
    return ProfileAPI.getProfileInfo(id)
}

export const getAuth = () => {
    console.warn('use the AuthApi.getAuth()')
    return AuthApi.getAuth()
}

export const ProfileAPI = {
    getProfileInfo(id) {
        return instance.get(`profile/${id}`)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    updatePhoto(image) {
        const formData = new FormData()
        formData.append('image', image)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile(ProfileInfo) {
        return instance.put(`profile`, ProfileInfo)
    },

}

export const AuthApi = {
    getAuth() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe, captcha) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete('auth/login')
    },
}

export const SecurityAPI = {
    getCaptcha(){
        return instance.get('security/get-captcha-url')
    }

}