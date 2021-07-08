import React from "react";
import {NavLink} from "react-router-dom";
import styles from './../Dialogs.module.css'

export type DialogsItemType = {
    id: string
    name: string
}

export const DialogItem: React.FC<DialogsItemType> = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

