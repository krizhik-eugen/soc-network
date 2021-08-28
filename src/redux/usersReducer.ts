import {DispatchTypes} from './redux-store';

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
    isFetching: boolean
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const SET_FETCHING = 'SET_FETCHING'

export const follow = (userID: number) => ({type: FOLLOW, userID}) as const
export const unfollow = (userID: number) => ({type: UNFOLLOW, userID}) as const
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (page: number) => ({type: SET_CURRENT_PAGE, page}) as const
export const setUsersTotalCount = (count: number) => ({type: SET_USERS_TOTAL_COUNT, count}) as const
export const setFetching = (isFetching: boolean) => ({type: SET_FETCHING, isFetching}) as const

let initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    usersTotalCount: 0,
    currentPage: 1,
    isFetching: false
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
        case SET_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    }
}
export default usersReducer