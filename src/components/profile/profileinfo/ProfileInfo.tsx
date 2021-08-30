import React from 'react';
import styles from './ProfileInfo.module.css';
import {UserProfileType} from '../../../redux/profileReducer';
import {Preloader} from '../../common/preloader/Preloader';

type ProfileInfoPropsType = {
    profile: UserProfileType
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={styles.content}>
            <div>
                <img className={styles.background}
                     src='https://www.businessinsider.in/photo/81769906/How-to-reverse-image-search-on-Google-to-find-information-related-to-a-specific-photo.jpg?imgsize=297676'
                     alt=''/>
            </div>
            <div className={styles.description}>
                <div><img src={props.profile.photos.large}/></div>
                <span>{props.profile.fullName}</span>
                <div>Contacts:</div>
                <div>Site: {props.profile.contacts.mainLink}</div>
                <div>FaceBook: {props.profile.contacts.facebook}</div>
                <div>Instagram: {props.profile.contacts.instagram}</div>
                <div>GitHub: {props.profile.contacts.github}</div>
            </div>
        </div>
    );
}