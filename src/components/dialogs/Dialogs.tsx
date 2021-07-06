import React from "react";
import {NavLink} from "react-router-dom";
import st from './Dialogs.module.css'

type DialogsItemType = {
    id: string
    name: string
}
type MessageType = {
    id?: number
    message: string
}

const DialogItem: React.FC<DialogsItemType> = (props) => {
    return (
        <div className={st.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={st.message}>{props.message}</div>
    )
}

let dialogs: Array<DialogsItemType> = [{id: '1', name: 'Dimych'},
    {id: '2', name: 'Eugen'},
    {id: '3', name: 'Margo'},
    {id: '4', name: 'Natali'},
    {id: '5', name: 'Bro'}]

let messages: Array<MessageType> = [{id: 1, message: 'Yo'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'Great day!'}]


export function Dialogs() {
    return (
        <div className={st.dialogs}>
            <div className={st.dialogsItem}>
                {dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)}
            </div>
            <div className={st.messages}>
                {messages.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    )
}