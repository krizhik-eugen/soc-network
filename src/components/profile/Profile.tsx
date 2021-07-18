import React from "react";
import styles from './Profile.module.css';
import {MyPosts} from "./myposts/MyPosts";
import {ProfileInfo} from "./profileinfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";
import {addPost} from "../../redux/state";

type ProfilePropsType = {
    posts: ProfilePageType
    addPost: (newPostMessage: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts.posts} addPost={addPost}/>
        </div>
    )
}