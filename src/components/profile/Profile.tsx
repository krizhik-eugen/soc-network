import React from "react";
import styles from './Profile.module.css';
import {MyPosts} from "./myposts/MyPosts";
import {ProfileInfo} from "./profileinfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    posts: ProfilePageType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts.posts}/>
        </div>
    )
}