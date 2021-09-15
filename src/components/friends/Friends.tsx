import React from "react";
import styles from './Friends.module.css';
import {FriendsPropsType} from "./FriendsContainer";

export const Friends = (props: FriendsPropsType) => {

    return (
        <div className={styles.friends_wrapper}>
            <h4>Friends</h4>
            {props.friends.map((f) => <div key={f.id} className={styles.ava}>
                <img src={f.ava} alt={'user avatar'}/></div>)}
        </div>)

}
