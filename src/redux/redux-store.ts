import {applyMiddleware, combineReducers, createStore} from 'redux';
import {reducer as formReducer} from 'redux-form'
import thunkMiddleWare from 'redux-thunk';
import profileReducer, {
    addPostAC, deletePostAC,
    setStatus,
    setUserProfile,
    updateStatus
} from './profileReducer';
import dialogsReducer, {addMessageAC} from './dialogsReducer';
import sideBarReducer from './sideBarReducer';
import usersReducer, {
    follow,
    setCurrentPage,
    setFetching, setFollowingProcess, setUsers,
    setUsersTotalCount,
    unfollow
} from './usersReducer';
import authReducer, {AuthReducerActionsTypes} from './authReducer';
import appReducer, {appReducerActionsTypes} from './appReducer';

export type DispatchTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof setFetching>
    | ReturnType<typeof setUserProfile>
    | AuthReducerActionsTypes
    | ReturnType<typeof setFollowingProcess>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof updateStatus>
    | appReducerActionsTypes
    | ReturnType<typeof deletePostAC>

export const rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sideBar: sideBarReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer
    }
);

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))


// @ts-ignore
window.store = store