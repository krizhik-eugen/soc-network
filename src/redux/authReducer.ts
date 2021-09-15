import {Dispatch} from 'redux';
import {DispatchTypes} from './redux-store';
import {authAPI} from "../api/api";

export type AuthDataType = {
    id: number
    login: string
    email: string
}

const SET_USER_DATA = 'SET-USERS-DATA'


export const setAuthUsersData = (data: AuthDataType) => ({type: SET_USER_DATA, data}) as const

export const getMyAuth = () => (dispatch: Dispatch) => {
    authAPI.meAuth()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUsersData(response.data.data))
            }
        })
}

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