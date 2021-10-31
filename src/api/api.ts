import axios from 'axios';
import {UserType} from '../redux/usersReducer';

type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string | null
}
type BaseResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

export type getProfileResponseType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
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
    headers: {'API-KEY': '29594cf8-7a2a-4c99-90e3-aafc284f801d'},
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
        return profileAPI.getProfile(userId)
    }
}


export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<getProfileResponseType>('profile/' + userId)
    },
    getStatus(userId: string) {
        return instance.get<string>('profile/status/' + userId)
    },
    updateStatus(status: string) {
        return instance.put<BaseResponseType>('profile/status', {status})
    }
}

export const authAPI = {
    meAuth() {
        return instance.get<AuthMeResponseType>(
            `auth/me`
        );
    },
    logIn(email: string, password: string, rememberMe: boolean) {
        return instance.post<BaseResponseType<{ userId: string }>>(`auth/login`, {
            email,
            password,
            rememberMe
        })
    },
    logout() {
        return instance.delete<BaseResponseType>(`auth/login`)
    }
}

