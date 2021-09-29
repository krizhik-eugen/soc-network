import {applyMiddleware, combineReducers, createStore} from 'redux';
import { reducer as formReducer } from 'redux-form'
import thunkMiddleWare from 'redux-thunk';
import profileReducer, {
    addPostAC,
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
import authReducer, {setAuthUsersData} from "./authReducer";

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
    | ReturnType<typeof setAuthUsersData>
    | ReturnType<typeof setFollowingProcess>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof updateStatus>

export const rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sideBar: sideBarReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer
    }
);

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))
// @ts-ignore
window.store = store