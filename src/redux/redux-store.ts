import {combineReducers, createStore } from "redux";
import profileReducer, {addNewPostContentAC, addPostAC} from "./profileReducer";
import dialogsReducer, {addMessageAC, addNewMessageContentAC} from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

export type DialogType = {
    id: string
    name: string
    avatar?: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id?: number
    message: string
    likeCount: number
}
export type FriendsType = {
    id: number
    name: string
    ava: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageContent: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostContent: string
}
export type SideBarType = {
    friends: Array<FriendsType>
}
export type MainStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sideBar: SideBarType
}
export type DispatchTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof addNewPostContentAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof addNewMessageContentAC>
export type StoreType = {
    _state: MainStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => MainStateType
    dispatch: (action: DispatchTypes) => void
}

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer
});

let store: StoreType = createStore(reducers)


export default store