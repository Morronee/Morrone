import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '56cfcec3-c475-47ed-bea2-f54ed88717c1' }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 45) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    }
}
export const followedAPI = {
    follow(id) {
        return instance.post(`follow/${id}`)
        .then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
        .then(response => response.data)
    }
}
export const profilesAPI = {
    setProfile(id) {
        return instance.get(`profile/${id}`)
        .then(response => response.data)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
        .then(response => response.data)
    },
    upStatus(status) {
        return instance.put(`profile/status/`, {status})
        .then(response => response)
    }
}
export const authAPI = {
    authMe() {
        return instance.get('auth/me')
        .then(response => response)
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}