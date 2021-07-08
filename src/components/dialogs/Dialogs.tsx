import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import styles from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogs: DialogsPageType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsItems = props.dialogs.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesItems = props.dialogs.messages.map(m => <Message message={m.message}/>)
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogsItems}
            </div>
            <div className={styles.messages}>
                {messagesItems}
            </div>
        </div>
    )
}