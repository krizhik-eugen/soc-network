import {AppStateType, DispatchTypes} from './redux-store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getMyAuth} from './authReducer';


const INITIALIZING_COMPLETED = 'APP_REDUCER/INITIALIZING_COMPLETED'

const setInitializingCompleted = () => ({type: INITIALIZING_COMPLETED} as const)

export type appReducerActionsTypes = ReturnType<typeof setInitializingCompleted>

export const appInitializing = (): ThunkAction<void, AppStateType, unknown, DispatchTypes> => (dispatch: ThunkDispatch<AppStateType, unknown, DispatchTypes>) => {
    let promise1 = dispatch(getMyAuth())

    Promise.all([promise1]).then(() => {
        dispatch(setInitializingCompleted())
    })

}

type InitialStateType = {
    isInitialized: boolean
}

let initialState: InitialStateType = {
    isInitialized: false
}

const appReducer = (state = initialState, action: appReducerActionsTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZING_COMPLETED:
            return {
                ...state, isInitialized: true
            }
        default:
            return state
    }
}
export default appReducer