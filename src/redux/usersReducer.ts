import {DispatchTypes} from "./redux-store";

export type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    photos: { small: string | null, large: string | null }
    uniqueUrlName: string | null
    name: string
    status: string | null
    location: LocationType
    followed: boolean
}
export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    usersTotalCount: number
    currentPage: number
}

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET_CURRENT-PAGE"
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT"

export const followAC = (userID: number) => ({type: FOLLOW, userID}) as const
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID}) as const
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users}) as const
export const setCurrentPageAC = (page: number) => ({type: SET_CURRENT_PAGE, page}) as const
export const setUsersTotalCountAC = (count: number) => ({type: SET_USERS_TOTAL_COUNT, count}) as const

let initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    usersTotalCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action: DispatchTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => (u.id === action.userID) ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => (u.id === action.userID) ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.page
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state, usersTotalCount: action.count
            }
        default:
            return state
    }
}
export default usersReducer