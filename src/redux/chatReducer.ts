import {Dispatch} from 'redux';
import {chatAPI, ChatMessageAPIType, ChatMessageType, StatusType} from '../api/chat-api';
import {v1} from 'uuid'

const MESSAGES_RECEIVED = 'CHAT-REDUCER/MESSAGES-RECEIVED'
const STATUS_CHANGED = 'CHAT-REDUCER/STATUS-CHANGED'

const setNewMessages = (messages: ChatMessageAPIType[]) =>
    ({type: MESSAGES_RECEIVED, payload: {messages}} as const)

const changeStatus = (status: StatusType) =>
    ({type: STATUS_CHANGED, payload: {status}} as const)

export type ChatReducerActionsTypes = ReturnType<typeof setNewMessages> | ReturnType<typeof changeStatus>

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(setNewMessages(messages))
        }
    }
    return _newMessageHandler
}
let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandler = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(changeStatus(status))
        }
    }
    return _statusChangedHandler
}


export const startMessaging = () => async (dispatch: Dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed', statusChangedHandler(dispatch))
}

export const stopMessaging = () => async (dispatch: Dispatch) => {
    chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changed', statusChangedHandler(dispatch))
    chatAPI.stop()
}

export const sendMessage = (message: string) => async (dispatch: Dispatch) => {
    chatAPI.sendMessage(message)
}

type InitialStateType = {
    messages: ChatMessageType []
    status: StatusType
}

let initialState: InitialStateType = {
    messages: [],
    status: 'pending'
}

const chatReducer = (state = initialState, action: ChatReducerActionsTypes): InitialStateType => {
    switch (action.type) {
        case MESSAGES_RECEIVED:
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map(m => ({...m, id: v1()}))].filter((m, i, arr) => i >= arr.length - 100)
            }
        case STATUS_CHANGED:
            return {
                ...state, status: action.payload.status
            }
        default:
            return state
    }
}
export default chatReducer
