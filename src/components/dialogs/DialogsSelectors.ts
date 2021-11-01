import {AppStateType} from '../../redux/redux-store';

export const getDialogs = (state: AppStateType) => {
    return state.dialogsPage.dialogs
}
export const getMessages = (state: AppStateType) => {
    return state.dialogsPage.messages
}