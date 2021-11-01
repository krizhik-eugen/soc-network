import {Dispatch} from 'redux';
import {getProfileResponseType, profileAPI, usersAPI} from '../api/api';

export type PostType = {
    id?: number
    message: string
    likeCount: number
}

export type UserProfileType = null | getProfileResponseType

export type ProfilePageType = {
    posts: Array<PostType>
    profile: UserProfileType
    status: string
}

const ADD_POST = 'PROFILE_REDUCER/ADD-POST'
const DELETE_POST = 'PROFILE_REDUCER/DELETE-POST'
const SET_USER_PROFILE = 'PROFILE_REDUCER/SET-USER-PROFILE'
const SET_STATUS = 'PROFILE_REDUCER/SET-STATUS'
const UPDATE_STATUS = 'PROFILE_REDUCER/UPDATE-STATUS'

export const addPostAC = (newPost: string) => ({type: ADD_POST, newPost} as const)
export const deletePostAC = (postID: number) => ({type: DELETE_POST, postID} as const)
export const setUserProfile = (profile: UserProfileType) => ({type: SET_USER_PROFILE, profile: profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const updateStatus = (status: string) => ({type: UPDATE_STATUS, status} as const)

export type ProfileReducerActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof updateStatus>

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
    profile: null,
    status: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPost, likeCount: 0}]
            };
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postID)
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            };
        case SET_STATUS:
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