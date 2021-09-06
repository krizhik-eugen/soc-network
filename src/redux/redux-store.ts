import {combineReducers, createStore} from 'redux';
import profileReducer, {addNewPostContentAC, addPostAC, setUserProfile} from './profileReducer';
import dialogsReducer, {addMessageAC, addNewMessageContentAC} from './dialogsReducer';
import sideBarReducer from './sideBarReducer';
import usersReducer, {
    follow,
    setCurrentPage,
    setFetching, setUsers,
    setUsersTotalCount,
    unfollow
} from './usersReducer';
import authReducer, {setAuthUsersData} from "./authReducer";

export type DispatchTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof addNewPostContentAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof addNewMessageContentAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof setFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUsersData>

export const rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sideBar: sideBarReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
);

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
