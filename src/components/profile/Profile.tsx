import React from 'react';
import styles from './Profile.module.css';
import {ProfileInfo} from './profileinfo/ProfileInfo';
import {MyPostsContainer} from './myposts/MyPostsContainer';
import {UserProfileType} from '../../redux/profileReducer';

type ProfilePropsType = {
    profile: UserProfileType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={styles.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}