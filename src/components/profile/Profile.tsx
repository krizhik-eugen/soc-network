import React from "react";
import styles from './Profile.module.css';
import {ProfileInfo} from "./profileinfo/ProfileInfo";
import {MyPostsContainer} from "./myposts/MyPostsContainer";

export const Profile = () => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}