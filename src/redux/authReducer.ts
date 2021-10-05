import {Dispatch} from 'redux';
import {AppStateType, DispatchTypes} from './redux-store';
import {authAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {stopSubmit} from 'redux-form';

/*
export type AuthDataType = {
    id: number
    login: string
    email: string
    isAuth: boolean
}
*/

const SET_USER_DATA = 'SET-USERS-DATA'

export const setAuthUsersData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) =>
    ({type: SET_USER_DATA, payload: {id, login, email, isAuth}}) as const

export const getMyAuth = () => (dispatch: Dispatch) => {
    authAPI.meAuth()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUsersData(response.data.data.id, response.data.data.login, response.data.data.email, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, unknown, DispatchTypes> => (dispatch: ThunkDispatch<AppStateType, unknown, DispatchTypes>) => {
    authAPI.logIn(email, password, rememberMe)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(getMyAuth())
            } else if (res.data.resultCode === 10) {
                //@ts-ignore
                dispatch(stopSubmit('login', {_error: 'anti-bot error (captcha)'}))
            } else {
                //@ts-ignore
                dispatch(stopSubmit('login',
                    {_error: res.data.messages ? res.data.messages[0] : 'Some error occurred'}))
            }
        })
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logOut()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUsersData(null, null, null, false))
            }
        })
}

type InitialStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

let initialState: InitialStateType = {
    id: null,
    login: '',
    email: '',
    isAuth: false
}

const usersReducer = (state = initialState, action: DispatchTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.payload
            }

        default:
            return state
    }
}
export default usersReducer