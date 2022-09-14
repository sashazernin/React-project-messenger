import * as axios from "axios";
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers: {
        "API-KEY": "02728440-279f-4ceb-acb6-fa3d774532fd"
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