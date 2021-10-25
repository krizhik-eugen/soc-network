import axios from "axios";
import {UserType} from "../redux/usersReducer";
import {UserProfileType} from "../redux/profileReducer";
import {FormDataType} from "../components/login/login";

type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string | null
}
type BaseResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}

type getProfileResponseType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }
    photos: {
        small: string | null
        large: string | null
    }
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
    headers: {"API-KEY": '29594cf8-7a2a-4c99-90e3-aafc284f801d'},    /*96ed57f4-8713-4490-b93d-c4084b6b6075*/
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
        return instance.delete<BaseResponseType>(
            `follow/${id}`
        ).then(response => {
            return response.data
        })
    },
    setFollowed(id: number) {
        return instance.post<BaseResponseType>(
            `follow/${id}`
        ).then(response => {
            return response.data
        })
    },
    getProfile(userId: string) {
        // console.warn('use get Profile in ProfileAPI')
        return profileAPI.getProfile(userId)
    }
}


export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<UserProfileType>('profile/' + userId)
    },
    getStatus(userId: string) {
        return instance.get<string>('profile/status/' + userId)
    },
    updateStatus(status: string) {
        return instance.put<BaseResponseType>('profile/status', {status})
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
    },
    logIn(email: string, password: string, rememberMe: boolean){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}

