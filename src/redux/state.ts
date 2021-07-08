export type DialogType = {
    id: string
    name: string
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
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type ProfilePageType = {
    posts: Array<PostType>
}
export type SideBarType ={}
export type MainStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sideBar: SideBarType
}

let state: MainStateType = {
    dialogsPage: {
        dialogs: [{id: '1', name: 'Dimych'},
            {id: '2', name: 'Eugen'},
            {id: '3', name: 'Margo'},
            {id: '4', name: 'Natali'},
            {id: '5', name: 'Bro'}],
        messages: [{id: 1, message: 'Yo'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'How are you?'},
            {id: 4, message: 'Great day!'}]
    },
    profilePage: {
        posts: [{id: 1, message: 'Hello', likeCount: 15},
            {id: 2, message: 'Hey', likeCount: 15},
            {id: 3, message: 'Ho', likeCount: 15},
            {id: 4, message: 'He-he', likeCount: 4}]
    },
    sideBar: {}
}

export default state