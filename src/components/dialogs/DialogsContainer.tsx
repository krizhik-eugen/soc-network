import React from "react";
import {addMessageAC, addNewMessageContentAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()
                let dispatch = store.dispatch.bind(state)
                const addMessage = () => dispatch(addMessageAC())
                const addNewMessageContent = (text: string) => dispatch(addNewMessageContentAC(text))

                return (
                    <Dialogs addMessage={addMessage}
                             addNewMessageContent={addNewMessageContent}
                             dialogs={state.dialogsPage.dialogs}
                             messages={state.dialogsPage.messages}
                             newMessageContent={state.dialogsPage.newMessageContent}
                    />)
            }
            }
        </StoreContext.Consumer>
    )
}