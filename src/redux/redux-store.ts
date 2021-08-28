import {combineReducers, createStore} from "redux";
import profileReducer, {addNewPostContentAC, addPostAC, ProfilePageType} from "./profileReducer";
import dialogsReducer, {addMessageAC, addNewMessageContentAC, DialogsPageType} from "./dialogsReducer";
import sideBarReducer, {SideBarType} from "./sideBarReducer";
import usersReducer, {
    follow,
    setCurrentPage,
    setFetching, setUsers,
    setUsersTotalCount,
    unfollow
} from "./usersReducer";

/*export type MainStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sideBar: SideBarType
}*/
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



/*export type StoreType = {
    _state: MainStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => MainStateType
    dispatch: (action: DispatchTypes) => void
}*/

export const rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sideBar: sideBarReducer,
        usersPage: usersReducer
    }
);

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
