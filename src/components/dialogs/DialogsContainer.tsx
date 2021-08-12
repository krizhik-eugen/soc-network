import React from "react";
import {addMessageAC, addNewMessageContentAC, DialogType} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { Dispatch } from "redux";
import { MessageType } from "./Message/Message";

type MapStateToPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageContent: string
}

type MapDispatchToPropsType = {
    addMessage: () => void
    addNewMessageContent: (text: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageContent: state.dialogsPage.newMessageContent
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: () => {dispatch(addMessageAC())},
        addNewMessageContent: (text: string) => {dispatch(addNewMessageContentAC(text))}
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)