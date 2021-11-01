import {AppStateType} from "../../redux/redux-store";

export const getProfile = (state: AppStateType) => {
    return state.profilePage.profile
}
export const getStatus = (state: AppStateType) => {
    return state.profilePage.status
}
export const getPosts = (state: AppStateType) => {
    return state.profilePage.posts
}