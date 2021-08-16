import {DispatchTypes} from "./redux-store";

export type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    photoURL: string
    fullName: string
    status: string
    location: LocationType
    followed: boolean
}
export type UsersPageType = {
    users: Array<UserType>
}

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

export const followAC = (userID: number) => ({type: FOLLOW, userID}) as const
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID}) as const
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users}) as const

let initialState: UsersPageType = {
    users: [
        {
            id: 1,
            photoURL: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
            followed: false,
            fullName: 'Eugen',
            status: "i'm a boss",
            location: {city: 'Zaslavl', country: 'Belarus'}
        },
        {
            id: 2,
            photoURL: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
            followed: true,
            fullName: 'Dmitry',
            status: "i'm a boss too",
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            photoURL: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
            followed: true,
            fullName: 'Andrew',
            status: "i'm a boss too",
            location: {city: 'Kiev', country: 'Ukraine'}
        }
    ],
}

const usersReducer = (state: UsersPageType = initialState, action: DispatchTypes): UsersPageType => {
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
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}
export default usersReducer