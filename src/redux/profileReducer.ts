import {Dispatch} from 'redux';
import {DispatchTypes} from './redux-store';
import {profileAPI, usersAPI} from "../api/api";

export type PostType = {
    id?: number
    message: string
    likeCount: number
}

export type UserProfileType = null | {
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

export type ProfilePageType = {
    posts: Array<PostType>
    newPostContent: string
    profile: UserProfileType
    status: string
}


const ADD_POST = 'ADD-POST'
const ADD_NEW_POST_CONTENT = 'UPDATE-NEW-POST-CONTENT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const UPDATE_STATUS = 'UPDATE-STATUS'
export const addPostAC = () => ({type: ADD_POST}) as const
export const addNewPostContentAC = (newPostContent: string) =>
    ({type: ADD_NEW_POST_CONTENT, newPostContent: newPostContent}) as const
export const setUserProfile = (profile: UserProfileType) => ({type: SET_USER_PROFILE, profile: profile}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status}) as const
export const updateStatus = (status: string) => ({type: UPDATE_STATUS, status}) as const

export const getUserProfileById = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getUserStatusById = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}


let initialState: ProfilePageType = {
    posts: [{id: 1, message: 'Hello', likeCount: 15},
        {id: 2, message: 'Hey', likeCount: 15},
        {id: 3, message: 'Ho', likeCount: 15},
        {id: 4, message: 'He-he', likeCount: 4}],
    newPostContent: '',
    profile: null,
    status: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: DispatchTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: state.newPostContent, likeCount: 0}],
                newPostContent: ''
            };
        case ADD_NEW_POST_CONTENT:
            return {
                ...state,
                newPostContent: action.newPostContent
            };
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPDATE_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}
export default profileReducer