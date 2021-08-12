import {combineReducers, createStore} from "redux";
import profileReducer, {addNewPostContentAC, addPostAC, ProfilePageType} from "./profileReducer";
import dialogsReducer, {addMessageAC, addNewMessageContentAC, DialogsPageType} from "./dialogsReducer";
import sideBarReducer, {SideBarType} from "./sideBarReducer";

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
        sideBar: sideBarReducer
    }
);

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
