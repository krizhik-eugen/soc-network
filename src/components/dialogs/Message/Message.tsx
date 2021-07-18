import React from "react";
import styles from './../Dialogs.module.css'

export type MessageType = {
    id?: number
    message: string
}

export const Message: React.FC<MessageType> = (props) => {

    return (
        <div className={styles.message}>{props.message}</div>
    )
}