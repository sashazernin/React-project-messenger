import * as axios from "axios";
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers: {
        "API-KEY": "066be9d4-c8ec-4941-b031-4fcbf2310cd4"
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
    return instance.get(`profile/${id}`)
        .then(responce => {
            return responce.data
    })
}

export const getAuth = () => {
    return instance.get('auth/me')
        .then(responce => {
            return responce.data
        })
}