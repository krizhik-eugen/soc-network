import React from "react";
import {NavLink} from "react-router-dom";
import styles from './../Dialogs.module.css'

export type DialogsItemType = {
    id: string
    name: string
    avatar: any
}

export const DialogItem: React.FC<DialogsItemType> = (props) => {
    return (
        <div className={styles.dialog}>
            <div className={styles.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

