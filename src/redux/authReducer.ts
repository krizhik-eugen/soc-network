import {Dispatch} from 'redux';
import {AppStateType, DispatchTypes} from './redux-store';
import {authAPI, securityAPI} from '../api/api';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {stopSubmit} from 'redux-form';


// Обработка ошибок!!!


const SET_USER_DATA = 'AUTH_REDUCER/SET-USERS-DATA'
const GET_CAPTCHA_URL = 'AUTH_REDUCER/GET-CAPTCHA-URL'

const setAuthUsersData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) =>
    ({type: SET_USER_DATA, payload: {id, login, email, isAuth}} as const)

const getCaptchaUrlSuccess = (captchaUrl: string | null) =>
    ({type: GET_CAPTCHA_URL, payload: {captchaUrl}} as const)

export type AuthReducerActionsTypes = ReturnType<typeof setAuthUsersData> | ReturnType<typeof getCaptchaUrlSuccess>

export const getMyAuth = () => async (dispatch: Dispatch) => {
    const response = await authAPI.meAuth()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUsersData(response.data.data.id, response.data.data.login, response.data.data.email, true))
        dispatch(getCaptchaUrlSuccess(null))
    }
    return response
}

export const login = (email: string, password: string, rememberMe: boolean, captcha?: string): ThunkAction<void, AppStateType, unknown, DispatchTypes> => async (dispatch: ThunkDispatch<AppStateType, unknown, DispatchTypes>) => {
    console.log(email)
    const response = await authAPI.logIn(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getMyAuth())
    } else if (response.data.resultCode === 10) {
        dispatch(getCaptshaUrl())
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


export const getCaptshaUrl = (): ThunkAction<void, AppStateType, unknown, DispatchTypes> => async (dispatch: ThunkDispatch<AppStateType, unknown, DispatchTypes>) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


type InitialStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captchaUrl: string | null
}

let initialState: InitialStateType = {
    id: null,
    login: '',
    email: '',
    isAuth: false,
    captchaUrl: null
}

const usersReducer = (state = initialState, action: AuthReducerActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.payload
            }
        case 'AUTH_REDUCER/GET-CAPTCHA-URL':
            return {...state, captchaUrl: action.payload.captchaUrl}
        default:
            return state
    }
}
export default usersReducer