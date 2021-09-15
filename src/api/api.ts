import axios from "axios";
import {UserType} from "../redux/usersReducer";

type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string | null
}
type FollowResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}
type AuthMeResponseType = {
    data: {
        id: number
        login: string
        email: string
    }
    resultCode: number
    messages: string[]
}

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": '29594cf8-7a2a-4c99-90e3-aafc284f801d'},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersResponseType>(
            `users?page=${currentPage}&count=${pageSize}`
        )
            .then(response => {
                return response.data
            })
    },
    setUnfollowed(id: number) {
        return instance.delete<FollowResponseType>(
            `follow/${id}`
        ).then(response => {
            return response.data
        })
    },
    setFollowed(id: number) {
        return instance.post<FollowResponseType>(
            `follow/${id}`
        ).then(response => {
            return response.data
        })
    },
    getProfile(userId: string) {
        return instance.get('profile/' + userId)
    }
}
/*
export const followAPI = {
    setUnfollowed(id: number){
        return instance.delete<FollowResponseType>(
            `follow/${id}`
        ).then(response => {
            return response.data
        })
    },
    setFollowed(id: number){
        return instance.post<FollowResponseType>(
            `follow/${id}`
        ).then(response => {
            return response.data
        })
    },
}*/

export const authAPI = {
    meAuth() {
        return instance.get<AuthMeResponseType>(
            `auth/me`
        )
    }
}

