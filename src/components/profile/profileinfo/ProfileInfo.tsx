import React from 'react';
import styles from './ProfileInfo.module.css';
import {UserProfileType} from '../../../redux/profileReducer';
import {Preloader} from '../../common/preloader/Preloader';
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: UserProfileType
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={styles.content}>
            {/*<div>*/}
            {/*    <img className={styles.background}*/}
            {/*         src='https://www.businessinsider.in/photo/81769906/How-to-reverse-image-search-on-Google-to-find-information-related-to-a-specific-photo.jpg?imgsize=297676'*/}
            {/*         alt=''/>*/}
            {/*</div>*/}
            <div className={styles.description}>
                {props.profile.photos.large
                    ? <div><img src={props.profile.photos.large} alt={'user avatar'}/></div> :
                    props.profile.photos.small
                        ? <div><img src={props.profile.photos.small} alt={'user avatar'}/></div>
                        : <div><img
                            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGS-e3KADHPl0FNuePNVZKd2q2VMrB7HmsuSjVZeiJjeD1BgCNnBTDwK9T_iwkyMJUdGM&usqp=CAU'}
                            alt={'user avatar'}/>
                        </div>}
                {/*<div><img src={props.profile.photos.large}/></div>*/}
                <ProfileStatus status={'Hello'}/>
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