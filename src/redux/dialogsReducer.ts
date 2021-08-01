import {DialogsPageType, DispatchTypes, MessageType,} from "./state";

const add_message = "ADD-MESSAGE"
const update_new_message_content = "UPDATE-NEW-MESSAGE-CONTENT"

export const addMessageAC = () => ({type: add_message}) as const
export const addNewMessageContentAC = (newMessageContent: string) =>
    ({type: update_new_message_content, newMessageContent: newMessageContent}) as const

const dialogsReducer = (state: DialogsPageType, action: DispatchTypes) => {
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