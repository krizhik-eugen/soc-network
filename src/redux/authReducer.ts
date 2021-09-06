import {DispatchTypes} from './redux-store';

export type AuthDataType = {
    id: number
    login: string
    email: string
}

const SET_USER_DATA = 'SET-USERS-DATA'


export const setAuthUsersData = (data: AuthDataType) => ({type: SET_USER_DATA, data}) as const

type InitialStateType = {
    id: number
    login: string
    email: string
    isAuth: boolean
}

let initialState: InitialStateType = {
    id: 0,
    login: '',
    email: '',
    isAuth: false
}

const usersReducer = (state = initialState, action: DispatchTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}
export default usersReducer