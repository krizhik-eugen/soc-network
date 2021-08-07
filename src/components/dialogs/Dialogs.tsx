import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import styles from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/redux-store";

type DialogsPropsType = {
    addMessage: () => void
    addNewMessageContent: (text: string) => void
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageContent: string
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialogsItems = props.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)
    let messagesItems = props.messages.map(m => <Message message={m.message}/>)

    const addMessage = () => props.addMessage()
    const addNewMessageContent = (e: ChangeEvent<HTMLTextAreaElement>) => props.addNewMessageContent(e.currentTarget.value)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogsItems}
            </div>
            <div className={styles.messages}>
                <div>{messagesItems}</div>
                <div>
                    <div>
                        <textarea placeholder={'type here'} value={props.newMessageContent}
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