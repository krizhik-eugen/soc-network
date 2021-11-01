import {Dispatch} from 'redux';
import {AppStateType, DispatchTypes} from './redux-store';
import {authAPI} from '../api/api';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'AUTH_REDUCER/SET-USERS-DATA'

const setAuthUsersData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) =>
    ({type: SET_USER_DATA, payload: {id, login, email, isAuth}} as const)

export type AuthReducerActionsTypes = ReturnType<typeof setAuthUsersData>

export const getMyAuth = () => async (dispatch: Dispatch) => {
    const response = await authAPI.meAuth()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUsersData(response.data.data.id, response.data.data.login, response.data.data.email, true))
    }
    return response
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, unknown, DispatchTypes> => async (dispatch: ThunkDispatch<AppStateType, unknown, DispatchTypes>) => {
    const response = await authAPI.logIn(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getMyAuth())
    } else if (response.data.resultCode === 10) {
        dispatch(stopSubmit('login', {_error: 'anti-bot error (captcha)'}))
    } else {
        dispatch(stopSubmit('login',
            {_error: response.data.messages ? response.data.messages[0] : 'Some error occurred'}))
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUsersData(null, null, null, false))
    }
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

const usersReducer = (state = initialState, action: AuthReducerActionsTypes): InitialStateType => {
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