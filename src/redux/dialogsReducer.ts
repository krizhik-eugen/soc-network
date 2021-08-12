import {DispatchTypes} from "./redux-store";
import dimych from "./avatars/dimych.jpg";
import eugen from "./avatars/eugen.jpeg";
import margo from "./avatars/margo.jpg";
import natali from "./avatars/natali.jpg";
import bro from "./avatars/bro.jpg";

export type DialogType = {
    id: string
    name: string
    avatar?: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageContent: string
}
export type MessageType = {
    id: number
    message: string
}

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_CONTENT = "UPDATE-NEW-MESSAGE-CONTENT"

export const addMessageAC = () => ({type: ADD_MESSAGE}) as const
export const addNewMessageContentAC = (newMessageContent: string) =>
    ({type: UPDATE_NEW_MESSAGE_CONTENT, newMessageContent: newMessageContent}) as const

let initialState: DialogsPageType = {
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
}

const dialogsReducer = (state: DialogsPageType = initialState, action: DispatchTypes): DialogsPageType => {
    switch (action.type) {

        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: state.newMessageContent}],
                newMessageContent: ''
            };
        case UPDATE_NEW_MESSAGE_CONTENT:
            return {
                ...state,
                newMessageContent: action.newMessageContent
            };
        default:
            return state
    }
}
export default dialogsReducer