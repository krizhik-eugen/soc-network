import {AppStateType} from "../../redux/redux-store";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getUsersTotalCount = (state: AppStateType) => {
    return state.usersPage.usersTotalCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingProcess = (state: AppStateType) => {
    return state.usersPage.followingProcess
}
