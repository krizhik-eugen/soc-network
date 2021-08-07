import {DialogsPageType, DispatchTypes, MessageType,} from "./redux-store";
import dimych from "./avatars/dimych.jpg";
import eugen from "./avatars/eugen.jpeg";
import margo from "./avatars/margo.jpg";
import natali from "./avatars/natali.jpg";
import bro from "./avatars/bro.jpg";

const add_message = "ADD-MESSAGE"
const update_new_message_content = "UPDATE-NEW-MESSAGE-CONTENT"

export const addMessageAC = () => ({type: add_message}) as const
export const addNewMessageContentAC = (newMessageContent: string) =>
    ({type: update_new_message_content, newMessageContent: newMessageContent}) as const

let initialState = {
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

const dialogsReducer = (state: DialogsPageType = initialState, action: DispatchTypes) => {
    switch (action.type) {

        case add_message:
            const newMessage: MessageType = {id: 5, message: state.newMessageContent}
            state.messages.push(newMessage)
            state.newMessageContent = ''
            return state;
        case update_new_message_content:
            state.newMessageContent = action.newMessageContent
            return state;
        default:
            return state
    }
}
export default dialogsReducer