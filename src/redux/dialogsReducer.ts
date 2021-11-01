import dimych from './avatars/dimych.jpg';
import eugen from './avatars/eugen.jpeg';
import margo from './avatars/margo.jpg';
import natali from './avatars/natali.jpg';
import bro from './avatars/bro.jpg';

export type DialogType = {
    id: string
    name: string
    avatar?: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type MessageType = {
    id: number
    message: string
}

const ADD_MESSAGE = 'DIALOGS_REDUCER/ADD-MESSAGE'

export const addMessageAC = (newMessage: string) => ({type: ADD_MESSAGE, newMessage} as const)

export type DialogsReducerActionsTypes = ReturnType<typeof addMessageAC>

let initialState: DialogsPageType = {
    dialogs: [{id: '1', name: 'Dimych', avatar: dimych},
        {id: '2', name: 'Eugen', avatar: eugen},
        {id: '3', name: 'Margo', avatar: margo},
        {id: '4', name: 'Natali', avatar: natali},
        {id: '5', name: 'Bro', avatar: bro}],
    messages: [{id: 1, message: 'Yo'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Super! Hope you too!'}]
}

const dialogsReducer = (state = initialState, action: DialogsReducerActionsTypes): DialogsPageType => {
    switch (action.type) {

        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: action.newMessage}]
            };
        default:
            return state
    }
}
export default dialogsReducer