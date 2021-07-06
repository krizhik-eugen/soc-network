import React from "react";
import st from './Profile.module.css';
import {MyPosts} from "./myposts/MyPosts";
import {ProfileInfo} from "./profileinfo/ProfileInfo";

export function Profile() {
    return (
        <div className={st.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}