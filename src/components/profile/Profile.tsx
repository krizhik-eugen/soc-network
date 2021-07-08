import React from "react";
import styles from './Profile.module.css';
import {MyPosts} from "./myposts/MyPosts";
import {ProfileInfo} from "./profileinfo/ProfileInfo";
import {PostType} from "../../index";

type ProfilePropsType = {
    posts: Array<PostType>
}

export const Profile: React.FC<ProfilePropsType> =(props) => {

   /* let posts = [{id: 1, message: 'Hello', likeCount: 15},
        {id: 2, message: 'Hey', likeCount: 15},
        {id: 3, message: 'Ho', likeCount: 15},
        {id: 4, message: 'He-he', likeCount: 4}]*/

    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
}