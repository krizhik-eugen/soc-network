import React from 'react';
import {addMessageAC, DialogType} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';
import {MessageType} from './Message/Message';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';

type MapStateToPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    isAuth: boolean
}

type MapDispatchToPropsType = {
    addMessage: (newMessage: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (newMessage: string) => {
            dispatch(addMessageAC(newMessage))
        }
    }
}

export const DialogsContainer = React.memo(
    compose<React.ComponentType>(
        connect(mapStateToProps, mapDispatchToProps),
        WithAuthRedirect
    )(Dialogs))