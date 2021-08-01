import dimych from './avatars/dimych.jpg'
import eugen from './avatars/eugen.jpeg'
import margo from './avatars/margo.jpg'
import natali from './avatars/natali.jpg'
import bro from './avatars/bro.jpg'
import john from './avatars/john.jpg'
import lika from './avatars/lika.jpg'
import kuka from './avatars/kuka.jpg'
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
    AddPostActionType
    | UpdateNewPostContentActionType
    | AddMessageActionType
    | UpdateMessageContentActionType

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostContentActionType = ReturnType<typeof addNewPostContentAC>
export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type UpdateMessageContentActionType = ReturnType<typeof addNewMessageContentAC>
export type StoreType = {
    _state: MainStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => MainStateType
    dispatch: (action: DispatchTypes) => void
}

export const store: StoreType = {
    _state: {
        dialogsPage: {
            dialogs: [{id: '1', name: 'Dimych', avatar: dimych},
                {id: '2', name: 'Eugen', avatar: eugen},
                {id: '3', name: 'Margo', avatar: margo},
                {id: '4', name: 'Natali', avatar: natali},
                {id: '5', name: 'Bro', avatar: bro}],
            messages: [{id: 1, message: 'Yo'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'How are you?'},
                {id: 4, message: 'Super! Hope you too!'}],
            newMessageContent: ''
        },
        profilePage: {
            posts: [{id: 1, message: 'Hello', likeCount: 15},
                {id: 2, message: 'Hey', likeCount: 15},
                {id: 3, message: 'Ho', likeCount: 15},
                {id: 4, message: 'He-he', likeCount: 4}],
            newPostContent: ''
        },
        sideBar: {
            friends: [
                {id: 1, name: 'John', ava: john},
                {id: 2, name: 'Lika', ava: lika},
                {id: 3, name: 'Kuka', ava: kuka},
            ]
        }
    },
    _callSubscriber() {
        console.log('state has been changed')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action) { //action - объект, должен содержать св-во type: ' ',
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        sideBarReducer(this._state.sideBar, action)
        this._callSubscriber()
    }
}