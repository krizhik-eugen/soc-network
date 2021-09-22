import React from 'react';
import styles from './Profile.module.css';
import {ProfileInfo} from './profileinfo/ProfileInfo';
import {MyPostsContainer} from './myposts/MyPostsContainer';
import {updateUserStatus, UserProfileType} from '../../redux/profileReducer';

type ProfilePropsType = {
    profile: UserProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={styles.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    )
}