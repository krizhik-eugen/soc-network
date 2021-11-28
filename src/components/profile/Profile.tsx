import React from 'react';
import styles from './Profile.module.css';
import {ProfileInfo} from './profileinfo/ProfileInfo';
import {MyPostsContainer} from './myposts/MyPostsContainer';
import {UserProfileType} from '../../redux/profileReducer';

type ProfilePropsType = {
    profile: UserProfileType
    status: string
    updateUserStatus: (status: string) => void
    setUserPhotos: (file: File) => void
    isOwner: boolean
}

export const Profile = React.memo((props: ProfilePropsType) => {
    return (
        <div className={styles.content}>
            <ProfileInfo profile={props.profile} isOwner={props.isOwner} status={props.status}
                         setUserPhotos={props.setUserPhotos}
                         updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    )
})