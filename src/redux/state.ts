import dimych from './avatars/dimych.jpg'
import eugen from './avatars/eugen.jpeg'
import margo from './avatars/margo.jpg'
import natali from './avatars/natali.jpg'
import bro from './avatars/bro.jpg'
import john from './avatars/john.jpg'
import lika from './avatars/lika.jpg'
import kuka from './avatars/kuka.jpg'

/*
let render = () => {
    console.log('rendering')
}
*/

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
export type DispatchTypes = AddPostActionType | UpdateNewPostContentActionType | AddMessageActionType | UpdateMessageContentActionType

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostContentActionType ={
    type: 'UPDATE-NEW-POST-CONTENT'
    newPostContent: string
}
type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
type UpdateMessageContentActionType = {
    type: 'UPDATE-NEW-MESSAGE-CONTENT'
    newMessageContent: string
}

/*
let state: MainStateType = {
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
}
*/
/*export const addPost = () => {
    const newPost: PostType = {id: 5, message: state.profilePage.newPostContent, likeCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostContent = ''
    render()
}*/
/*
export const updateNewPostContent = (newPostContent: string) => {
    state.profilePage.newPostContent = newPostContent
    render()
}
*/
/*export const addMessage = () => {
    const newMessage: MessageType = {id: 5, message: state.dialogsPage.newMessageContent}
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageContent = ''
    render()
}*/
/*

export const updateMessageContent = (newMessageContent: string) => {
    state.dialogsPage.newMessageContent = newMessageContent
    render()
}
*/
/*export const subscribe = (observer: () => void) => {
    render = observer;
}*/

export type StoreType = {
    _state: MainStateType
    _render: () => void
    /*updateNewPostContent: (newPostContent: string) => void*/
    /*addPost: () => void*/
    /*addMessage: () => void*/
    /*updateMessageContent: (newPostContent: string) => void*/
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
    _render() {
        console.log('state has been changed')
    },

    subscribe(observer: () => void) {
        this._render = observer;
    },
    getState() {
        return this._state
    },

    // updateNewPostContent(newPostContent: string) {
    //     this._state.profilePage.newPostContent = newPostContent
    //     this._render()
    // },
    /*addPost() {
        const newPost = {id: 5, message: this._state.profilePage.newPostContent, likeCount: 0}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostContent = ''
        this._render()
    },*/
    // addMessage() {
    //     const newMessage: MessageType = {id: 5, message: this._state.dialogsPage.newMessageContent}
    //     this._state.dialogsPage.messages.push(newMessage)
    //     this._state.dialogsPage.newMessageContent = ''
    //     this._render()
    // },
    /*updateMessageContent(newMessageContent: string) {
        this._state.dialogsPage.newMessageContent = newMessageContent
        this._render()
    },*/

    dispatch(action) { //action - объект, должен содержать св-во type: ' ',
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {id: 5, message: this._state.profilePage.newPostContent, likeCount: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostContent = ''
            this._render()
        } else if (action.type === 'UPDATE-NEW-POST-CONTENT') {
            this._state.profilePage.newPostContent = action.newPostContent
            this._render()
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage: MessageType = {id: 5, message: this._state.dialogsPage.newMessageContent}
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageContent = ''
            this._render()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-CONTENT') {
            this._state.dialogsPage.newMessageContent = action.newMessageContent
            this._render()
        }
    }

}