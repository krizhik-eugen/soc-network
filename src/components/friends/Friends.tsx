import React from "react";
import styles from './Friends.module.css'
import {FriendsType} from "../../redux/store";

type FriendsPropsType = {
    friends: Array<FriendsType>
}

export const Friends: React.FC<FriendsPropsType> = (props) => {
    return (
        <div className={styles.friends_wrapper}>
            <h2>Friends</h2>
            {props.friends.map( (f) => <div className={styles.ava}><img src={f.ava}/></div>) }
        </div>
    )
}