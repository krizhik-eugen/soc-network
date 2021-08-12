import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import styles from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsItems = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar}/>)
    let messagesItems = props.messages.map(m => <Message key={m.id} message={m.message}/>)

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