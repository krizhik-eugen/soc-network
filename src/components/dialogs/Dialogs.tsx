import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import styles from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogsPageType, DispatchTypes} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
   /* addMessage: () => void
    updateMessageContent: (newMessageContent: string) => void*/
    dispatch: (action: DispatchTypes) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialogsItems = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)
    let messagesItems = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    const addMessage = () => {
        props.dispatch({type: "ADD-MESSAGE"})
    }

    const addNewMessageContent = (e: ChangeEvent<HTMLTextAreaElement>) => props.dispatch({type: "UPDATE-NEW-MESSAGE-CONTENT", newMessageContent: e.currentTarget.value})

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogsItems}
            </div>
            <div className={styles.messages}>
                {messagesItems}
                <div>
                    <div>
                        <textarea placeholder={'type here'} value={props.dialogsPage.newMessageContent}
                                  onChange={addNewMessageContent}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}