import {Dispatch} from 'redux';
import {AppStateType, DispatchTypes} from './redux-store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {stopSubmit} from 'redux-form';
import {chatAPI, ChatMessageType} from '../api/chat-api';

const MESSAGES_RECEIVED = 'CHAT-REDUCER/MESSAGES-RECEIVED'

const setNewMessages = (messages: ChatMessageType[]) =>
    ({type: MESSAGES_RECEIVED, payload: {messages}} as const)

export type ChatReducerActionsTypes = ReturnType<typeof setNewMessages>

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(setNewMessages(messages))
        }
    }
    return _newMessageHandler
}


export const startMessaging = () => async (dispatch: Dispatch) => {
    chatAPI.start()
    chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}

export const stopMessaging = () => async (dispatch: Dispatch) => {
    chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
    chatAPI.stop()
}

export const sendMessage = (message: string) => async (dispatch: Dispatch) => {
    chatAPI.sendMessage(message)
}


type InitialStateType = {
    messages: ChatMessageType []
}

let initialState: InitialStateType = {
    messages: []
}

const chatReducer = (state = initialState, action: ChatReducerActionsTypes): InitialStateType => {
    switch (action.type) {
        case MESSAGES_RECEIVED:
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
        default:
            return state
    }
}
export default chatReducer
