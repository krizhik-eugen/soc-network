import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import styles from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../index";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}


export const Dialogs: React.FC<DialogsPropsType> = (props) => {

   /* let dialogs: Array<DialogsItemType> = [{id: '1', name: 'Dimych'},
        {id: '2', name: 'Eugen'},
        {id: '3', name: 'Margo'},
        {id: '4', name: 'Natali'},
        {id: '5', name: 'Bro'}]

    let messages: Array<MessageType> = [{id: 1, message: 'Yo'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Great day!'}]*/

    let dialogsItems = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesItems = props.messages.map(m => <Message message={m.message}/>)
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